import React,{useEffect,useCallback} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getContactsData } from "../store/contactsSlice";
import Loader from "../components/Loader/Loader";


const Contacts = () => {
const contacts = useSelector(state => state.contacts.contactList)
const isFetch = useSelector(state => state.contacts.isFetch)     
const dispatch = useDispatch();

const getDataHandler = useCallback(
    () => {
        dispatch(getContactsData())
    },
    [dispatch],
)
useEffect(() => {
    getDataHandler()
}, [dispatch,getDataHandler])
    return(
        <>
        {isFetch ? <Loader /> : <>
            Контакты
                <ul>
                    {contacts.map(contact => <li key={contact.id}>
                       Имя: {contact.name}<br/>
                      Номер :{contact.phone}<br/>
                      Email: {contact.email}
                    </li>)}
                </ul>
            </>}
        </>
    );
}

export default Contacts;