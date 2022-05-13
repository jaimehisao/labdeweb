import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase'

export const uploadFile = async (file) => {

    if (!file) return

    const fileToUpload = ref(storage, `documents/${file.name}`)
    
    const uploadTask = uploadBytesResumable(fileToUpload, file)

    uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            // console.log(progress)
        }, (error) => console.log(error),
        () => {
            return getDownloadURL(uploadTask.snapshot.ref)
            .then(url => {
                console.log(url)
            })
        }
    )
}

/*  OTRO

export const uploadFile = async (file) => {

    if (!file) return

    const fileToUpload = ref(storage, `documents/${file.name}`)
    

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
}


*/