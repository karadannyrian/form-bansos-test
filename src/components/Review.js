import React, { useState } from "react"
import { useNavigate } from "react-router";
import Notification from './Notification';

export default function Review(props) {
    const { payload } = props
    const [isChecked, setCheck] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [popUpVisible, setPopupVisible] = useState(false)
    const [popUpFailedVisible, setPopupFailedVisible] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="lg:flex lg:items-center lg:justify-between p-5">
            <div className="mt-10 sm:mt-0 m-15">
            </div>
            <div className="mt-10 sm:mt-0 m-15">
                <div className="px-5 py-5 bg-indigo-50">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Review Data</h3>
                    <p className="mt-1 text-sm text-gray-600">Harap Periksa kembali data penerima Bantuan Sosial dengan baik. <label className="font-bold text-gray-600">Silahkan Cek persetujuan dan klik submit jika sudah sesuai</label></p>
                </div>
                <form action="#"
                    onSubmit={(e) => {
                        let randomTimeout = Math.floor(Math.random() * 2000)
                        console.log(randomTimeout)
                        e.preventDefault()
                        setLoading(true)
                        if (randomTimeout > 1500) {
                            setTimeout(() => {
                                setLoading(false)
                                setPopupFailedVisible(true)
                            }, randomTimeout);
                        } else setTimeout(() => {
                            setLoading(false)
                            setPopupVisible(true)
                        }, randomTimeout);
                    }}
                >
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-10 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nomor Kartu Keluarga
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.kk || 'Belum diisi'}
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        NIK
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.nik || 'Belum diisi'}
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nama
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.nama || 'Belum diisi'}
                                    </label>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Penghasilan sebelum pandemi
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.salaryBefore ? `Rp.${payload.salaryBefore}` : 'Belum diisi'}
                                    </label>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Penghasilan setelah pandemi
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.salaryAfter ? `Rp.${payload.salaryAfter}` : 'Belum diisi'}
                                    </label>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Alasan membutuhkan bantuan
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.reason || 'Belum diisi'}
                                    </label>
                                </div>
                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Provinsi
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.province || 'Belum diisi'}
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Kab/Kota
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.kabkot || 'Belum diisi'}
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Kelurahan/Desa
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.kelurahan || 'Belum diisi'}
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        RT
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.rt || 'Belum diisi'}
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        RW
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.rw || 'Belum diisi'}
                                    </label>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Alamat
                                    </label>
                                    <label className="block text-sm font-medium text-gray-500">
                                        {payload.address || 'Belum diisi'}
                                    </label>
                                </div>
                                <div className="col-span-6">
                                    <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox" value={isChecked} onChange={e => setCheck(!isChecked)} id="default-toggle" class="sr-only peer" />
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                        <span class="ml-3 block text-sm font-medium text-gray-500">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-3 bg-indigo-50 text-right sm:px-6">
                        <button
                            onClick={() => props.previousStep()}
                            type="button"
                            className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Kembali
                        </button>
                        {isChecked &&
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 disabled:bg-slate-150 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Submit
                            </button>
                        }
                    </div>
                </form>
                {isLoading &&
                    <div className="loading-block">
                        <div style={{ margin: 'auto' }}>
                            <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                    </div>}
            </div>
            <div className="mt-10 sm:mt-0 m-15">

            </div>
            <Notification
                visible={popUpFailedVisible || popUpVisible}
                classIcon={popUpFailedVisible ? 'fa-solid fa-circle-xmark text-red-600' : 'fa-solid fa-circle-check text-green-600'}
                title={popUpFailedVisible ? 'Gagal menyimpan data' : 'Sukses menyimpan data'}
                label={popUpFailedVisible ? 'Data informasi penerima bantuan sosial berhasil tersimpan. Harap coba beberapa saat lagi.' : 'Data informasi penerima bantuan sosial berhasil tersimpan.'}
                close={() => {
                    popUpVisible && setTimeout(() => {
                        navigate("../", { replace: true })
                    }, 1000);
                    setPopupVisible(false)
                    setPopupFailedVisible(false)
                }} />
        </div>
    )
}
