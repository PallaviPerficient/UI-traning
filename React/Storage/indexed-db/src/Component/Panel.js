import { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';

const Panel = () => {
  const db = useIndexedDB('people');
    db.getAll().then(result=> {
        console.log(result);
    });
    console.log(db);

const { getAll } = useIndexedDB('people');
const [persons, setPersons] = useState();

useEffect(() => {
    getAll().then(personsFromDB => {
        console.log(personsFromDB);
      setPersons(personsFromDB);
    });
  }, []);

return (
  <div>
  {persons}

<button>Update</button>
</div>
);

}
export default Panel;