const url = 'http://127.0.0.1:5000'
function getExcel(){
    console.log('on getExcel');
    fetch(`${url}/648e0353b276806d3c691f59`).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}
document.getElementById('datetracker').addEventListener('change', filterUsingDate, false);
function filterUsingDate(){
    console.log('on filter');
    const date = document.getElementById('datetracker').value;
    console.log(date);
    fetch(`${url}/date/${date}`,{method:'POST',body:{'date':'2'}}).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}
function deleteExcel(id){
    console.log('on delete');
    fetch(`${url}/${id}`,{method:'DELETE'}).then((res)=>{
        console.log(res);
        return res.json();
        // location.reload();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}
function getExcels(){
    console.log('on getExcels');
    fetch(`${url}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        const fileList = document.getElementById('fileList')
        for(i=0;i<data.length;i++){
            fileList.innerHTML = fileList.innerHTML + `<li id="item">${data[i].fileOriginalName}</li>`
            fileList.innerHTML = fileList.innerHTML + ` <button onclick='deleteExcel(${data[i]._id})'>Delete</button> <br/>`
        }
    }).catch((err)=>{
        console.log(err);
    })
}

document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
})
function addExcel(){
    const file = document.getElementById('file').files[0];
    var data = new FormData();
    data.append('file',file)
    if(file){
        fetch(`${url}/`,{
            method:'POST',
            body:data
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }else{
        console.log('input a file');
    }
}

function deleteExcel(){
    console.log('on deleteExcel');
    fetch(`${url}/648e0353b276806d3c691f59`,{
        method:'DELETE'
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}