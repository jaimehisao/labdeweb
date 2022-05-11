import { getDownloadURL, ref, uploadBytesResumable, get } from 'firebase/storage'
import { storage } from '../firebase'

export const uploadFile = (file) => {

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
    }
    )
}