import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Simon Mathews</h1>
        <div className='m-b-15'>Solftware Developer</div>
        <div className='d-flex '><a href='http://linkedin.com'>LinkedIn</a><a className="m-l-5" href='http://github.com'>GitHub</a></div>
      </div>
      <hr className='hor-line'></hr>
      <section>
        <h2>Experience</h2>
        <h3 className='m-b-15'>Solftware Developer</h3>
        <p>I work as a software Developer in Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis libero quos, ex soluta distinctio ea repudiandae modi. Blanditiis maxime, labore soluta corporis suscipit odit dolorem voluptates nesciunt excepturi, at sapiente laudantium a quidem amet! Cum architecto explicabo est omnis, iure maiores mollitia voluptatibus inventore officiis corrupti itaque dolorum dolorem minus.</p>
      </section>
      <hr className='hor-line'></hr>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Angular</li>
          <li>Node</li>
          <li>React</li>
        </ul>
      </section>
      <hr className='hor-line'></hr>
      <section>
        <h2>Hobbies</h2>
        <ul>
          <li>Football</li>
          <li>Painting</li>
          <li>Sketching</li>
          <li>Gaming</li>
        </ul>
      </section>
      <hr className='hor-line'></hr>      
    </div>
  );
}

export default App;
