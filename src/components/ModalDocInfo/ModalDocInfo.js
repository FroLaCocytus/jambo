import React, {useState, useContext, useEffect} from "react";
import styles from './ModalDocInfo.module.css'
import { observer } from 'mobx-react-lite';
import { ReactComponent as CrossSVG } from '../../img/cross.svg';
import { deleteDocument, updateDocumentInfo } from "../../http/documentAPI";
import { Context } from "../../index";
import { fetchDocuments } from "../../http/documentAPI";
import { format } from 'date-fns';

const ModalDocInfo = observer(({setIsModalOpen, selectedItem}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const {documentStore} = useContext(Context)

  const options = ["merchandiser", "chef"];
  const [accessRole, setAccessRole] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(()=>{
    console.log("Start")
    console.log(selectedItem)
    setAccessRole(JSON.parse(selectedItem.roles))
    setDescription(selectedItem.document_description)
  }, [])


  const updateFileInfo = async () => {

    await updateDocumentInfo(selectedItem.id, description, accessRole)
    .then(data => {
        alert(`Документ ${data.title} успешно обновлён`)
    })
    .catch(e => {
        alert(e.response.data)
    })
    fetchDocuments().then(data => {
        documentStore.setDocuments(data)
    })

  };

  const deleteFile = async () => {
    await deleteDocument(selectedItem.id)
    .then(data => {
        if(data.message === "Успешно")alert(`Документ успешно удалён`)
    })
    .catch(e => {
        alert(e.response.data)
    })
    fetchDocuments().then(data => {
        documentStore.setDocuments(data)
    })
    setIsModalOpen(false)
  };

// Работа с Ролями
  const deleteRole = (roleIndex) => {
    setAccessRole((prevRoles) => {
      const updatedRoles = [...prevRoles];
      updatedRoles.splice(roleIndex, 1); // Удаляем кнопку по индексу
      return updatedRoles;
    });
  };

  const handleSelect = (option) => {
    console.log(option)
    if (!accessRole.includes(option)) {
        setAccessRole((prevRoles) => [...prevRoles, option]);
      }
  };

  return (
    <div className={styles.modal}>
    <div className={styles.modal_content}>
        <div className={styles.modal_title}>
            <div className={styles.modal_title_box}>
                <div className={styles.modal_title_text}>{selectedItem.title}</div>
                <div className={styles.modal_title_img_box}>
                    <CrossSVG className={styles.modal_title_img} onClick={()=>{setIsModalOpen(false)}}/>
                </div>
            </div>
            <div className={styles.line_big}></div>
        </div>
        <div className={styles.modal_description}>
            <div className={styles.modal_description_text}>Описание</div>
            <div className={styles.modal_description_input}>
                <textarea value={description} onChange={e => setDescription(e.target.value)} className={styles.modal_description_input_text}></textarea>
            </div>
        </div>
        <div className={styles.modal_access}>
            <div className={styles.modal_access_text}>Доступно</div>
            <div className={styles.modal_access_box}>
                <div className={styles.modal_access_list}>
                    {accessRole.map((item, index)=>(
                        <div key={index} className={styles.modal_access_role}>
                            {item}
                            <CrossSVG className={styles.modal_access_role_img} onClick={() => deleteRole(index)}/>
                        </div>
                    ))}
                </div>
                <div className={styles.modal_access_img_box}>
                    <select className={styles.modal_select} value={""} onChange={(e) => handleSelect(e.target.value)}>
                        <option  hidden value=""></option>
                        {options.map((option) => (
                            <option className={styles.modal_option} key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
        <div className={styles.modal_buttons_box}>
            <button className={styles.modal_button_update} onClick={updateFileInfo}>Обновить</button>
            <button className={styles.modal_button_delete} onClick={deleteFile}>Удалить</button>
        </div>
    </div>
    </div>
  );
});

export default ModalDocInfo;