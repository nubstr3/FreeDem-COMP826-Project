import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.henry.freedem',
    projectId: '6715d8ac00328dfb48db',
    databaseId: '6715da190032a411d88a',
    userCollectionId: '6715da3b0034e4650162',
    patientCollectionId: '6715da6f000bcf2e8747',
    storageId: '6715dca9000d5b0bf2fb',
}


const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform);

const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);



export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;

    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
      const currentAccount = await account.get();

      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        config.databaseId,
        config.userCollectionId,
        [Query.equal('accountId', currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }

export const getAllPatients = async () => {
  try {
    const patients = await databases.listDocuments(
      config.databaseId,
      config.patientCollectionId
    )

    return patients.documents;
  } catch (error) {
    throw new Error(error);
    
  }
}

export const signOut = async () => {
  try {
    const session = await account.deleteSession('current');

    return session;
  } catch (error) {
    throw new Error(error)
  }
}

export const getFilePreview = async (fileId, type) => {
  let fileUrl;

  try {
    if(type === 'image') {
      fileUrl = storage.getFilePreview(config.storageId, fileId, 2000, 2000, 'top', 100)
    } else {
      throw new Error('Invalid file type')
    }

    if(!fileUrl) throw Error;

    return fileUrl;

  } catch (error) {
    throw new Error(error);
  }
}

export const uploadFile = async (file, type) => {
if(!file) return;
  
  let photoFileName = "";

  if(file.mimeType === "image/jpg") { photoFileName="photo" + file.fileSize + ".jpg"};
  if(file.mimeType === "image/jpeg") { photoFileName="photo" + file.fileSize + ".jpeg"};
  if(file.mimeType === "image/png") { photoFileName="photo" + file.fileSize + ".png"};


  const asset = { 
    name: photoFileName,
    type: file.type,
    size: file.fileSize,
    uri: file.uri,
  };

  try {
    const uploadedFile = await storage.createFile(
      config.storageId,
      ID.unique(),
      asset
    );

    const fileUrl = await getFilePreview(uploadedFile.$id, type);
    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}

export const addPatient = async (form) => {

  try {
    const [photoUrl] = await Promise.all([
      uploadFile(form.photo, 'image'),
    ])

    const newPhoto = await databases.createDocument(config.databaseId, config.patientCollectionId, ID.unique(), {
      name: form.name,
      details: form.details,
      photo: photoUrl,
      manager: form.userId
    });

    return newPhoto;
  } catch (error) {
    throw new Error(error);
  }
}

export const getUserPatients = async (userId) => {
  try {
    const patients = await databases.listDocuments(
      config.databaseId,
      config.patientCollectionId,
      [Query.equal("manager", userId)]
    );

    if (!patients) throw new Error("Something went wrong");

    return patients.documents;
  } catch (error) {
    throw new Error(error);
  }
};


;

