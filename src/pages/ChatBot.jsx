// import React, { useState } from 'react'
// import axios from 'axios'

// function ChatBot() {
//   const [input, setInput] = useState('')
//   const [chatLog, setChatLog] = useState([])
//   const [products, setProducts] = useState([])

//   const sendMessage = async () => {
//     if (!input.trim()) return

//     const userMessage = input
//     setChatLog([...chatLog, { role: 'user', text: userMessage }])
//     setInput('')

//     try {
//       const res = await axios.post('http://localhost:3000/AIS', {
//         message: userMessage,
//       })

//       const aiMessage = res.data.message || 'Got it!'
//       const results = res.data.products || []

//       setChatLog((prev) => [...prev, { role: 'bot', text: aiMessage }])
//       setProducts(results)
//     } catch (err) {
//       setChatLog((prev) => [
//         ...prev,
//         { role: 'bot', text: 'Something went wrong!' },
//       ])
//       console.error(err)
//     }
//   }

//   return (
//     <div className="p-4 pt-[100px] max-w-xl mx-auto">
//       <div className="mb-4 h-64 overflow-y-auto border p-2 rounded bg-gray-100">
//         {chatLog.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`mb-2 ${
//               msg.role === 'user' ? 'text-right' : 'text-left'
//             }`}
//           >
//             <span
//               className={`inline-block px-3 py-1 rounded ${
//                 msg.role === 'user' ? 'bg-blue-200' : 'bg-green-200'
//               }`}
//             >
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-2">
//         <input
//           className="flex-1 border px-3 py-2 rounded"
//           placeholder="Ask for products..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={sendMessage}
//         >
//           Send
//         </button>
//       </div>

//       {products.length > 0 && (
//         <div className="mt-4">
//           <h2 className="text-lg font-bold mb-2">Matching Products:</h2>
//           <ul className="grid gap-3">
//             {products.map((p) => (
//               <li key={p._id} className="border p-2 rounded bg-white shadow">
//                 <strong>{p.name}</strong> — ${p.price}
//                 <br />
//                 <small>
//                   {p.category} / {p.subcategory}
//                 </small>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ChatBot
// import React, { useState } from 'react'
// import axios from 'axios'

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { from: 'bot', text: 'Hi! Ask me about products.' },
//   ])
//   const [input, setInput] = useState('')
//   const [filters, setFilters] = useState(null)
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(false)

//   const sendMessage = async () => {
//     if (!input.trim()) return

//     const userMsg = input.trim()

//     // Add user message to chat
//     setMessages((msgs) => [...msgs, { from: 'user', text: userMsg }])
//     setInput('')
//     setLoading(true)

//     try {
//       // 1. Send message to backend AI chat route
//       const aiResponse = await axios.post('http://localhost:3000/AIS', {
//         message: userMsg,
//       })
//       console.log('AI Response:', aiResponse.data)
//       // const { message: botMessage, filters: aiFilters } = aiResponse.data

//       // Add bot message to chat
//       // setMessages((msgs) => [...msgs, { from: 'bot', text: botMessage }])

//       //   // Save filters JSON in state
//       //   setFilters(aiFilters)

//       //   // 2. Fetch products by filters from backend
//       //   const prodRes = await axios.post(
//       //     'http://localhost:3000/products/filter',
//       //     {
//       //       filters: aiFilters,
//       //     }
//       //   )
//       //   setProducts(prodRes.data.products || [])
//       // } catch (error) {
//       //   console.error('Error chatting or fetching products:', error)
//       //   setMessages((msgs) => [
//       //     ...msgs,
//       //     { from: 'bot', text: 'Sorry, something went wrong!' },
//       //   ])
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div
//       style={{ width: 350, margin: 'auto', fontFamily: 'Arial, sans-serif' }}
//     >
//       <h2>Shopping Chatbot</h2>

//       <div
//         style={{
//           border: '1px solid #ccc',
//           borderRadius: 6,
//           padding: 10,
//           height: 300,
//           overflowY: 'auto',
//           backgroundColor: '#fafafa',
//           marginBottom: 10,
//         }}
//       >
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             style={{
//               textAlign: msg.from === 'user' ? 'right' : 'left',
//               margin: '8px 0',
//             }}
//           >
//             <span
//               style={{
//                 display: 'inline-block',
//                 backgroundColor: msg.from === 'user' ? '#c8e6c9' : '#e1f5fe',
//                 color: msg.from === 'user' ? '#2e7d32' : '#0277bd',
//                 padding: '8px 12px',
//                 borderRadius: 15,
//                 maxWidth: '75%',
//                 wordBreak: 'break-word',
//               }}
//             >
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       <input
//         type="text"
//         placeholder="Type your message..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//         disabled={loading}
//         style={{
//           width: 'calc(100% - 90px)',
//           padding: 8,
//           borderRadius: 20,
//           border: '1px solid #ccc',
//         }}
//       />
//       <button
//         onClick={sendMessage}
//         disabled={loading}
//         style={{
//           width: 70,
//           marginLeft: 10,
//           borderRadius: 20,
//           backgroundColor: '#0078d7',
//           color: 'white',
//           fontWeight: 'bold',
//           border: 'none',
//           cursor: 'pointer',
//         }}
//       >
//         Send
//       </button>

//       {/* Show parsed filters JSON */}
//       {filters && (
//         <div
//           style={{
//             marginTop: 20,
//             padding: 10,
//             backgroundColor: '#f0f0f0',
//             borderRadius: 6,
//           }}
//         >
//           <h4>Extracted Filters:</h4>
//           <pre style={{ whiteSpace: 'pre-wrap' }}>
//             {JSON.stringify(filters, null, 2)}
//           </pre>
//         </div>
//       )}

//       {/* Show products */}
//       {products.length > 0 && (
//         <div style={{ marginTop: 20 }}>
//           <h4>Matching Products:</h4>
//           <ul>
//             {products.map((p) => (
//               <li key={p._id} style={{ marginBottom: 8 }}>
//                 <strong>{p.name}</strong> — ${p.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Chatbot
// import React, { useState } from 'react'
// import axios from 'axios'

// export default function ChatBot() {
//   const [input, setInput] = useState('')
//   const [chatMessage, setChatMessage] = useState('')
//   const [filters, setFilters] = useState(null)
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(false)

//   const sendMessage = async () => {
//     if (!input.trim()) return
//     setLoading(true)
//     setError(null)

//     try {
//       const res = await axios.post('http://localhost:3000/AIS', {
//         message: input,
//       })
//       // if (res.data.success) {
//       //   setChatMessage(res.data.message)
//       //   setFilters(res.data.filters)
//       // } else {
//       //   setError('Unexpected response from server')
//       // }
//       console.log(res.data)
//     } catch (err) {
//       setError(
//         err.response?.data?.error || err.message || 'Error sending message'
//       )
//     }

//     setLoading(false)
//     setInput('')
//   }

//   const onEnterPress = (e) => {
//     if (e.key === 'Enter') {
//       sendMessage()
//     }
//   }

//   return (
//     <div
//       style={{
//         maxWidth: 600,
//         margin: 'auto',
//         padding: 20,
//         fontFamily: 'Arial',
//       }}
//     >
//       <h2>Shopping Chatbot</h2>

//       <textarea
//         rows={3}
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={onEnterPress}
//         placeholder="Ask me about products..."
//         style={{ width: '100%', padding: 10, fontSize: 16 }}
//         disabled={loading}
//       />

//       <button
//         onClick={sendMessage}
//         disabled={loading || !input.trim()}
//         style={{ marginTop: 10, padding: '10px 20px' }}
//       >
//         {loading ? 'Thinking...' : 'Send'}
//       </button>

//       {error && (
//         <div style={{ marginTop: 20, color: 'red' }}>
//           <strong>Error:</strong> {error}
//         </div>
//       )}

//       {chatMessage && (
//         <div
//           style={{
//             marginTop: 20,
//             whiteSpace: 'pre-wrap',
//             background: '#f0f0f0',
//             padding: 10,
//             borderRadius: 5,
//           }}
//         >
//           <strong>Chatbot:</strong> <br />
//           {chatMessage}
//         </div>
//       )}

//       {filters && (
//         <div style={{ marginTop: 20 }}>
//           <h3>Extracted Filters</h3>
//           <pre style={{ background: '#e6e6e6', padding: 10, borderRadius: 5 }}>
//             {JSON.stringify(filters, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   )
// }

import React, { useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
export default function ChatBot() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState([])
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me about products.' },
  ])
  const [filters, setFilters] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    setLoading(true)
    setError(null)

    const userMsg = input.trim()

    // Add user's message
    setMessages((msgs) => [...msgs, { from: 'user', text: userMsg }])
    setInput('')

    try {
      const res = await axios.post('http://localhost:3000/AIS', {
        message: userMsg,
      })

      // Add bot response
      const botMessage = res.data || 'Got it!'
      let [first, second] = botMessage.split('|').map((str) => str.trim())
      if (second.endsWith('"')) {
        second = second.slice(0, -1)
      }
      setMessages((msgs) => [...msgs, { from: 'bot', text: first }])

      if (second) {
        console.log('filter', second)

        const response = await axios.post(
          'http://localhost:3000/search',

          JSON.parse(second)
        )
        console.log('Filtered products:', response.data)
        setResult(response.data)
      }
    } catch (err) {
      setError(
        err.response?.data?.error || err.message || 'Error sending message'
      )
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'Oops, something went wrong!' },
      ])
    }

    setLoading(false)
  }

  const onEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6 font-poppins-regular pt-[100px]">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        Shopping Chatbot
      </h2>

      <div className="grid grid-cols-12 gap-6 h-[500px]">
        {/* Left: Chat conversation */}
        <div className="col-span-7 flex flex-col border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm overflow-scroll">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <span
                  className={`inline-block max-w-3/4 px-4 py-2 rounded-2xl bg-black text-white`}
                  style={{ wordBreak: 'break-word' }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <textarea
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onEnterPress}
            placeholder="Type a message..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:black-2 focus:ring-black text-black text-base mb-4"
            disabled={loading}
          />

          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 disabled:bg-gray-100"
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>

          {error && (
            <div className="mt-4 text-red-600 font-medium">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>

        {/* Right: Products or filters */}
        <div className="col-span-5 border border-gray-300 rounded-lg p-4 bg-white shadow-sm overflow-scroll">
          {filters ? (
            <>
              <h3 className="font-semibold mb-4 text-gray-700">
                Extracted Filters
              </h3>
              <pre className="font-mono text-sm whitespace-pre-wrap bg-gray-100 p-3 rounded">
                {JSON.stringify(filters, null, 2)}
              </pre>
            </>
          ) : (
            <p className="text-gray-500 italic">No filters extracted yet.</p>
          )}
          {result.map((element) => {
            return (
              <Card
                id={element._id}
                key={element._id}
                img={element.available[0].path}
                name={element.name}
                price={element.price}
                rated={element.rating}
                isOnSale={element.isOnSale}
                favorite={true}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
