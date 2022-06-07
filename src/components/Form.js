import React, { useEffect, useState } from "react"

export default function Form(props) {
    const { payload } = props


    console.log(payload)
    return (
        <div className="lg:flex lg:items-center lg:justify-between p-5">
            <div className="mt-10 sm:mt-0 m-15">
            </div>
            <div className="mt-10 sm:mt-0 m-15">
                <div className="px-5 py-5 bg-indigo-50">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Identitas Penerima</h3>
                    <p className="mt-1 text-sm text-gray-600">Harap input data identitas penerima bansos dengan yg sebenar-benarnya.</p>
                </div>
                <form action="#"
                    onSubmit={(e) => {
                        e.preventDefault()
                        props.nextStep()
                    }}
                >
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-10 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nomor Kartu Keluarga
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={payload.kk}
                                        onChange={(e) => {
                                            if (isNaN(e.target.value)) return null
                                            props.setValue({ ...payload, kk: e.target.value })
                                        }}
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        NIK
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={payload.nik}
                                        onChange={(e) => {
                                            if (isNaN(e.target.value)) return null
                                            props.setValue({ ...payload, nik: e.target.value })
                                        }}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nama
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={payload.name}
                                        onChange={(e) => {
                                            props.setValue({ ...payload, name: e.target.value.toUpperCase() })
                                        }}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Penghasilan sebelum pandemi
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            Rp.
                                        </span>
                                        <input
                                            required
                                            type="text"
                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            value={payload.salaryBefore}
                                            onChange={(e) => {
                                                if (isNaN(e.target.value)) return null
                                                props.setValue({ ...payload, salaryBefore: e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Penghasilan setelah pandemi
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            Rp.
                                        </span>
                                        <input
                                            required
                                            type="text"
                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            value={payload.salaryAfter}
                                            onChange={(e) => {
                                                if (isNaN(e.target.value)) return null
                                                props.setValue({ ...payload, salaryAfter: e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Alasan membutuhkan bantuan
                                    </label>
                                    <textarea
                                        required
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder=""
                                        value={payload.reason}
                                        onChange={(e) => {
                                            props.setValue({ ...payload, reason: e.target.value.toUpperCase() })
                                        }}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Foto KTP
                                    </label>
                                    <input accept=".jpg,.png,.pdf" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 " aria-describedby="file_input_help" id="file_input" type="file" />
                                    <p class="mt-1 text-sm text-gray-500" id="file_input_help">JPG, PNG, PDF (MAX 1MB)</p>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Foto KK
                                    </label>
                                    <input accept=".jpg,.png,.pdf" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300" type="file" id="formFile" />
                                    <p class="mt-1 text-sm text-gray-500" id="file_input_help">JPG, PNG, PDF (MAX 1MB)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-indigo-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Selanjutnya
                        </button>
                    </div>
                </form>
            </div>
            <div className="mt-10 sm:mt-0 m-15">

            </div>
        </div>
    )
}
