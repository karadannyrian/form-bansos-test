import React, { useEffect, useState } from "react"

export default function FormDetail(props) {
    const { payload } = props
    const [count, setCount] = useState(0)
    const [province, setProvince] = useState([])
    const [regencies, setRegencies] = useState([])
    const [village, setVillage] = useState([])

    const getDataProvince = () => {
        let data = require('../dummyfile/province.json');
        setProvince(data)
    }

    const getDataRegency = (name) => {
        setRegencies([])
        let data = require('../dummyfile/regency.json')
        let index = province.findIndex(e => e.name === name)
        if (index >= 0) {
            data = data.filter(e => e.id === province[index].id)
            setRegencies(data)
        } else setRegencies([])
    }

    const getDataVillage = (name) => {
        setVillage([])
        let data = require('../dummyfile/village.json')
        let index = regencies.findIndex(e => e.name === name)
        console.log(name, regencies, index)
        if (index >= 0) {
            console.log(regencies[index])
            data = data.filter(e => e.regid === regencies[index].regid)
            setVillage(data)
        } else setVillage([])
    }

    useEffect(() => {
        if (count === 0) {
            getDataProvince()
        }
        setCount(1)
    });
    return (
        <div className="lg:flex lg:items-center lg:justify-between p-5">
            <div className="mt-10 sm:mt-0 m-15">
            </div>
            <div className="mt-10 sm:mt-0 m-15">
                <div className="px-5 py-5 bg-indigo-50">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Alamat Penerima</h3>
                    <p className="mt-1 text-sm text-gray-600">Harap lengkapi data alamat penerima.</p>
                </div>
                <form action="#"
                    onSubmit={(e) => {
                        e.preventDefault()
                        props.nextStep()
                    }}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-10 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Provinsi
                                    </label>
                                    <select
                                        required
                                        value={payload.province}
                                        onChange={(e) => {
                                            props.setValue({ ...payload, province: e.target.value.toUpperCase(), kabkot: '' })
                                            getDataRegency(e.target.value)
                                        }}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option disabled value={''}>Pilih Provinsi</option>
                                        {province && province.map(v => {
                                            return (
                                                <option key={v.name} value={v.name} >{v.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Kab/Kota
                                    </label>
                                    <select
                                        required
                                        value={payload.kabkot}
                                        onChange={(e) => {
                                            props.setValue({ ...payload, kabkot: e.target.value.toUpperCase(), kelurahan: '' })
                                            getDataVillage(e.target.value)
                                        }}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option disabled value={''}>Pilih kabkot</option>
                                        {regencies && regencies.map(v => {
                                            return (
                                                <option key={v.name} value={v.name} >{v.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Kelurahan/Desa
                                    </label>
                                    <select
                                        required
                                        value={payload.kelurahan}
                                        onChange={(e) => {
                                            props.setValue({ ...payload, kelurahan: e.target.value.toUpperCase() })
                                        }}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option disabled value={''}>Pilih kelurahan</option>
                                        {village && village.map(v => {
                                            return (
                                                <option key={v.name} value={v.name} >{v.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        RT
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={payload.rt}
                                        onChange={(e) => {
                                            if (isNaN(e.target.value)) return null
                                            props.setValue({ ...payload, rt: e.target.value })
                                        }}
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        RW
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={payload.rw}
                                        onChange={(e) => {
                                            if (isNaN(e.target.value)) return null
                                            props.setValue({ ...payload, rw: e.target.value })
                                        }}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Alamat
                                    </label>
                                    <textarea
                                        required
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder=""
                                        value={payload.address}
                                        onChange={(e) => {
                                            props.setValue({ ...payload, address: e.target.value.toUpperCase() })
                                        }}
                                    />
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
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Review
                        </button>
                    </div>
                </form>
            </div >
            <div className="mt-10 sm:mt-0 m-15">

            </div>
        </div >
    )
}
