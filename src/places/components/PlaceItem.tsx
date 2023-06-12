import React, { useContext, useState } from 'react';

import Card from '../../shared/components/UI/Card';
import './PlaceItem.css';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UI/Modal';
import Map from '../../shared/components/UI/Map';
import AuthContext from '../../shared/context/auth-context';

interface Place {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface PlaceItemProps extends Place {
  onDelete: (id: string) => void;
}

const PlaceItem: React.FC<PlaceItemProps> = (props) => {
  const authContext = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    props.onDelete(props.id);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you really want to delete? This can't be undone.</p>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>

            {authContext.isLoggedIn && (
              <React.Fragment>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger onClick={showDeleteWarningHandler}>
                  DELETE
                </Button>
              </React.Fragment>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
