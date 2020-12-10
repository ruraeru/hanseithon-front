import React, { useRef, useState } from 'react';
import axios from 'axios';
import './fileupload.css';

function FileUpload() {
    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    // const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        // console.log(file);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        axios.post('https://hanseithon.xyz:3000/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                    setProgess(progress);
            }
        }).then(res => {
            if(res.data.message === '파일을 추가해주세요') {
                alert(res.data.message);
                setProgess(0);
            } 
            if(res.data.message === '파일 업로드 성공') {
                alert(res.data.message);
                window.location.reload();
            } 
            if(res.data.message === '제출 시간이 아닙니다') {
                alert(res.data.message);
                window.location.reload();
            }
            // alert(res);
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />
                <div className="progessBar" style={{ width: progress }}>
                    {progress}
                </div>
                <button onClick={uploadFile} className="upbutton">
                    제출
                </button>
                <h1>&lt; 파일 제출시 주의사항 &gt;</h1>
                <p><a>제출하실 파일명은 꼭</a> <a class="color-red">'팀명'</a> <a>으로 제출해 주시기 바랍니다.</a></p>
                <p>제출 후 제한시간 안에 재업로드가 가능하나,</p>
                <p class="color-red">타임아웃이 될 경우 파일 제출이 불가능하니 신중하게 제출해 주시기 바랍니다.</p>
                <p>용량이 초과하여 제출이 불가능할 경우 봇으로 문의 주시길 바랍니다.</p>
            </div>
        </div>
    );
}

export default FileUpload;