import { useState } from 'react'
import EmojiList from './components/EmojiList';
import SearchEmoji from './components/SearchEmoji';
import Nav from './components/Nav';
import './App.css'
import Container from './components/Contaner';
import InnerContainer from './components/InnerContainer';
import EmojiDetails from './components/EmojiDetails';

function App() {
  const [emojiData,setEmojiData] = useState([]);  
  const [emojiId,setEmojiId] = useState("");  
  const [emojiCode,setEmojiCode] = useState("");  
  return (
    <div className='App'>
      <Nav/>
      <SearchEmoji emojiData={emojiData} setEmojiData={setEmojiData}/>
      <Container>
        <InnerContainer>
          <EmojiList setEmojiCode={setEmojiCode} setEmojiId={setEmojiId} emojiData={emojiData}/>
        </InnerContainer>
        <InnerContainer>
          <EmojiDetails emojiCode={emojiCode} emojiId={emojiId}/>
        </InnerContainer>
      </Container>
      
    </div>
  )
}

export default App
