import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Labs from './pages/Labs'
import Reports from './pages/Reports'
import Config from './pages/Config'
import Api from './pages/Api'



export default function App(){
return (
<BrowserRouter>
<div className="flex h-screen bg-gray-100">
<Sidebar />
<div className="flex-1 p-6 overflow-auto">
<Routes>
<Route path="/" element={<Dashboard/>} />
<Route path="/labs" element={<Labs/>} />
<Route path="/reports" element={<Reports/>} />
<Route path="/config" element={<Config/>} />
<Route path="/api" element={<Api/>} />

</Routes>
</div>
</div>
</BrowserRouter>
)
}