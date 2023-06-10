import React from 'react'
import "./RecoverPass.scss";
import { useParams } from "react-router-dom";

const RecoverPass = () => {
    const { recoverToken } = useParams();
    function base64UrlDecode(str) {
        // Pad with '=' to make length a multiple of 4
        while (str.length % 4) {
           str += '=';
        }
        return str.replace(/-/g, '+').replace(/_/g, '/').replace(/¿/g, '.');
     }
    const decodedToken =  base64UrlDecode(recoverToken);
  return (

    <div>RecoverPass 
        {decodedToken}
    </div>
  )
}

export default RecoverPass