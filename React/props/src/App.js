import './App.css';
import Book7 from './Images/book7.jpg'
import Book8 from './Images/book8.jpg'
import Book9 from './Images/Book9.jpg'
import Card from './Card';
import Sdata from './Imagedata';



function App() {
  return (
    <>
      <h1 className="heading_Style">List of Books</h1>

      <Card
        imgsrc={Book7}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        links={Sdata[0].links}
      />

      <Card
        imgsrc={Book8}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        links={Sdata[1].links}
      />
      <Card
        imgsrc={Book9}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        links={Sdata[2].links}
      />

      <Card
        imgsrc={Book7}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        links={Sdata[3].links}
      />

      <Card
        imgsrc={Book8}
        title={Sdata[4].title}
        sname={Sdata[4].sname}
        links={Sdata[4].links}
      />

      <Card
        imgsrc={Book9}
        title={Sdata[5].title}
        sname={Sdata[5].sname}
        links={Sdata[5].links}
      />

      <Card
        imgsrc={Book7}
        title={Sdata[6].title}
        sname={Sdata[6].sname}
        links={Sdata[6].links}
      />
    </>
  );
}

export default App;
