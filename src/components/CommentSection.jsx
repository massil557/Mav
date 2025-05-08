import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CommentSection = ({ productId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const user = JSON.parse(localStorage.getItem('user'))
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/comments/${productId}`
        )
        console.log(response.data)
        setComments(response.data)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    fetchComments()
  }, [toggle])

  const isUserConnected = !!user
  const handleAddComment = async () => {
    if (isUserConnected) {
      if (!newComment.trim()) return
      try {
        const response = await axios.post(
          `http://localhost:3000/api/comments/${productId}`,
          { text: newComment, userId: user._id }
        )
        setComments((prev) => [...prev, response.data])
        setNewComment('')
        setToggle(!toggle)
      } catch (error) {
        console.error('Error adding comment:', error)
      }
    } else {
      alert('Please login to add a comment')
      navigate('/login')
    }
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-4 bg-white border border-gray-300 rounded-lg flex items-start space-x-4"
          >
            <img
              src={comment.imagePath}
              alt={`${comment.username}'s profile`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-gray-800">{comment.username}</p>
              <p className="text-gray-800">{comment.text}</p>
              <p className="text-sm text-gray-500 mt-2">
                Posted on {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection
