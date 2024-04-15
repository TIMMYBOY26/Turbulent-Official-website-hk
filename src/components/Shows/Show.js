import "./ShowStyles.css";
import ShowData from "./ShowData";
import { Auth } from '../Admin/auth';
import { db, auth, storage } from '../../config/firebase';
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

function Show() {
  const [showList, setShowList] = useState([]);
  //collection ref
  const showsCollectRef = collection(db, "shows");

  useEffect(() => {
    const q = query(showsCollectRef, orderBy('DB_date', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let shows = [];
      snapshot.docs.forEach((doc) => {
        shows.push({ ...doc.data(), id: doc.id });
      });
      setShowList(shows); // Update showList state with the fetched shows
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="show">
      <h1>Recent Shows</h1>

      {showList.map((show) => (
        <div class="showcards">
          <ShowData
            image={show.image_Url}
            redirectUrl={show.redirectUrl}
            heading={show.heading}
            date={show.date}
            googlemap={show.googlemap}
            organizer={show.organizer}
            text={show.text}
          />
        </div>
      ))}
    </div>
  );
}

export default Show;
