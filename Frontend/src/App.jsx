import { useState } from 'react'
import EditorModule from 'react-simple-code-editor'
import prism from 'prismjs'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import axios from 'axios'
import 'prismjs/themes/prism-tomorrow.css'
import 'highlight.js/styles/github-dark.css'
import './App.css'

const Editor = EditorModule.default ?? EditorModule

function App() {
  const [code, setCode] = useState('//Write your code here')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)

  async function reviewCode() {
    if (loading) return
    setLoading(true)
    try {
      const { data } = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(data)
    } catch (err) {
      setReview('⚠️ ' + (err.response?.data?.error || 'Request failed'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(c) => prism.highlight(c, prism.languages.javascript, 'javascript')}
            padding={10}
            preClassName="language-javascript"
            style={{ fontFamily: 'monospace', fontSize: 16 }}
          />
        </div>
        <button className="review" onClick={reviewCode} disabled={loading}>
          {loading ? 'Reviewing...' : 'Review'}
        </button>
      </div>
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  )
}

export default App