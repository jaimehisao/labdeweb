import { getDownloadURL, getStorage, uploadBytes, ref, uploadBytesResumable, get } from 'firebase/storage'
import { storage } from '../firebase'

export const uploadFile = (file) => {

    if (!file) return
    // Create a root reference
    //const storage = getStorage();
    const fileToUpload = ref(storage, `documents/${file.name}`);
    console.log("ready to upload!")
    const uploadTask = uploadBytesResumable(fileToUpload, file)
    uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        }, (error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then(url => {
                    console.log(url)
                    return url
                })
        }
    )

    // 'file' comes from the Blob or File API

    /*
    uploadTask(fileToUpload, file).then((snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        console.log(progress)
        console.log('Uploaded a blob or file!');
    }, (error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then(url => console.log(url))
            { return url }
        }
    );

     */



    /*
    if(!file) return

    console.log(file)

    const storageRef = ref(storage, `documents/${file.name}`)
    
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    }, (error) => console.log(error),
    () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url => console.log(url))
        { return url }
    }
    )

     */
}