function generateUuid() {
    return uuidv4()
  }
  
  async function sha1(str) {
    const buffer = new TextEncoder("utf-8").encode(str)
    const hash = await crypto.subtle.digest("SHA-1", buffer)
    return Array.from(new Uint8Array(hash))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('')
  }

  const storeTodo = async (todoObject) => {
    
    let hashKey = await sha1(todoName)
    let todoString = JSON.stringify({ todoName: todoName, isTodoDone: false })
    localStorage.setItem(hashKey, todoString)
    let id = generateUuid() 
    localStorage.setItem(id, todoString)

    globalThis.location.reload()
  }