const getDataFromFirestore = (path) => {
    let collection = db.collection("heros").doc(path);

    collection.get()
    .then((doc) => {
        if(doc.exists){
            processData(doc.data());
        } else{
            location.href = '/';
        }
    })
    .catch(err => {
        alert(err);
    })
}

let path = location.pathname.split('/').pop();
getDataFromFirestore(path);

const processData = (data) => {
    let imgEle = document.querySelector('.mnimg');
    let nameEle = document.querySelector('.title');
    let detailEle = document.querySelector('.detail');
    let descriptionEle = document.querySelector('.description');
    let audioEle = document.querySelector('.audio');

    imgEle.style.backgroundImage = `url("${data.cvr}")`;
    nameEle.innerHTML = data.title;


    detailEle.innerHTML = data.detail;
    descriptionEle.innerHTML = data.description;
    audioEle.src = `${data.audio}`;

}