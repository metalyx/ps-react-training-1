import './App.css';
import FancyText from './components/HelloWorld/FancyText';
import FancyDiv from './components/FancyDiv/FancyDiv';
import ContactForm from './components/ContactForm/ContactForm';
import DisplayInput from './components/DisplayInput/DisplayInput';
import List from './components/List/List';

const list = [
    { id: 1, text: 'Some text' },
    { id: 2, text: 'Some other' },
    { id: 3, text: 'Content' },
    { id: 4, text: 'Lol' },
];

function App() {
    return (
        <div className='App'>
            <FancyText text={'Hello World'} />
            <FancyDiv />
            <ContactForm />
            <DisplayInput />
            <List list={list} />
        </div>
    );
}

export default App;
