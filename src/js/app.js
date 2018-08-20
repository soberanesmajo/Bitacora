bitacora.initializeFirebase();

const db = firebase.firestore();

let textArea = document.getElementById('text');
let boxText = document.getElementById('print');
let postBtn = document.getElementById('post');

postBtn.addEventListener('click', event => {
    let textAreaValue = textArea.value;
    //boxText.innerHTML = textAreaValue;
    //textArea.value = '';

    db.collection('publications').add({
       post: textAreaValue
      })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
          boxText.innerHTML = textAreaValue;
          textArea.value = '';
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
})

