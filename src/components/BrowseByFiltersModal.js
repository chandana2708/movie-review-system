import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import BrowseByFilters from './BrowseByFilters'; // Import your BrowseByFilters component

const BrowseByFiltersModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Browse By Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BrowseByFilters /> {/* Render the BrowseByFilters component here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BrowseByFiltersModal;
