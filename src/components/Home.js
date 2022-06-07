import React, { useEffect, useState } from 'react'
import StepWizard from "react-step-wizard";
import FormGeneral from './Form'
import { v4 as uuidv4 } from 'uuid';
import FormDetail from './FormDetail';
import Review from './Review';
import { useNavigate } from "react-router-dom";

const defaultPayload = {
    name: null,
    nik: '',
    kk: '',
    province: '',
    kabkot: '',
    kelurahan: '',
    rt: '',
    rw: '',
    age: '',
    gender: '',
    address: null,
    salaryBefore: '',
    salaryAfter: '',
    reason: null
}

export default function Home(props) {
    const navigate = useNavigate();
    const [count, setCount] = useState(0)
    const [payload, setPayload] = useState({ ...defaultPayload, id: uuidv4(), kk: '', nik: '', });
    useEffect(() => {
        if (count === 0) {
            setPayload({ ...defaultPayload, id: uuidv4(), kk: '', nik: '', })
            setCount(1)
        }

    });
    return (
        <div className='h-full'>
            <div className="lg:flex lg:items-center lg:justify-between px-5 pt-2 bg-indigo-100">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Bantuan Sosial (Bansos)</h2>
                    <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div className="mt-2 pb-2 flex items-center text-sm text-gray-500">
                            Silahkan isi form berikut untuk mengusulkan nama-nama penerima Bantuan Sosial (Bansos).
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    <span className="hidden sm:block ml-3">
                        <button
                            onClick={() => { navigate("../", { replace: true }); }}
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Reset Form
                        </button>
                    </span>

                </div>
            </div>
            <StepWizard className='overflow-hidden'>
                <FormGeneral payload={payload} setValue={(res) => setPayload(res)} />
                <FormDetail payload={payload} setValue={(res) => setPayload(res)} />
                <Review payload={payload} setValue={(res) => setPayload(res)} />
            </StepWizard>
            <div className='hidden lg:block absolute bottom-0 center-0 overflow-hidden'>
                <footer className="text-center lg:text-left bg-indigo-100 text-gray-600 w-screen">
                    <div className="text-center bg-indigo-100">
                        <div className='pb-1'>
                            <span>© 2022</span>
                            <a className="text-gray-600 font-semibold" href="https://github.com/karadannyrian"> karadannyrian</a>
                        </div>
                        <div>
                            <span className='mr-2'>
                                <i class="fa-brands fa-react"></i> <a className="text-gray-600 font-semibold" href="https://reactjs.org/">ReactJS</a>
                            </span>
                            <span className='mr-2'>
                                <a className="text-gray-600 font-semibold" href="https://tailwindcss.com/">Tailwind CSS</a>
                            </span>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}
