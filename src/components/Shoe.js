import React from 'react';
import Modal from 'react-modal';

class Shoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoe: props.shoe,
            showModal: false,
            isEditing: false,
            editShoe: {
                brand: '',
                style: '',
                size: '',
                UPC: '',
                imgLink: ''
            },
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.edit = this.editShoe.bind(this);
        this.deleteShoe = this.deleteShoe.bind(this);
        this.updateShoe = this.updateShoe.bind(this);
        this.handleChange = this.handleChange.bind(this);
      };

      openModal() {
        this.setState({ showModal: true});
      }
     
      closeModal() {
        this.setState({ 
            showModal: false,
            isEditing: false
        });
      }
      
      async editShoe() {
          await this.setState({
              showModal: true, 
              isEditing: true 
            });
      }

      deleteShoe(){
          this.setState({
              shoe: 'Empty Slot'
          });
          this.closeModal();
      }

      handleChange(event) {
        let newEdit = this.state.editShoe;
        newEdit[event.target.name] = event.target.value;
      }

      updateShoe() {
          this.setState({
              shoe: this.state.editShoe,
              showModal: false,
          })
      }

      render() {
        return (
            !this.state.showModal ?
                this.state.shoe !== 'Empty Slot' ?
                    <td className = "container" onClick={this.openModal} id="myBtn">
                        <img src={this.state.shoe.image} alt="Application" className="shoe"/>
                        <div className = "overlay">
                            <div className = "shoe-info">  
                                 {/* Name: */}
                                { this.state.shoe.name } <br />
                            </div>
                        </div>     
                    </td>
                :
                <td onClick ={this.edit} > Open Slot </td>
            :
            !this.state.isEditing && this.state.shoe.team && this.state.shoe.type === 'Marketing' ?
                <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
                >
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <div className = "modal-content">
                        <img alt="Shoe" src = { this.state.shoe.imgLink } style={{maxWidth: "300px"}}/> <br />
                        <span className="section-title"> { this.state.shoe.name } </span><br />
                        {this.state.shoe.description.map((bulletpoint) => <div> {bulletpoint} <br /> </div> )}
                        <span className="section-title">Stack</span> { this.state.shoe.stack } <br />
                        <span className="section-title">Team</span> {this.state.shoe.teammates} <br />
                        <br />
                    </div>
                    <a href={ this.state.shoe.link } className="shoe-button" >{this.state.shoe.linkText}</a>
                </Modal>
            :
            !this.state.isEditing && !this.state.shoe.team && this.state.shoe.type === 'Dreams' ?
                <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
                >
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <div className = "modal-content">
                        <img alt={this.state.shoe.name} src = { this.state.shoe.imgLink } style={{maxWidth: "300px"}}/> <br />
                        {this.state.shoe.description.map((bulletpoint) => <div> {bulletpoint} <br /> </div> )}
                        <br />
                    </div>
                </Modal>
            :
            !this.state.isEditing && this.state.shoe.team ?
                <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
                >
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <div className = "modal-content">
                        <img alt="Shoe" src = { this.state.shoe.imgLink } style={{maxWidth: "300px"}}/> <br />
                        <span className="section-title">{ this.state.shoe.name }</span> <br />
                        {this.state.shoe.description} <br />
                        <span className="section-title">Stack</span> { this.state.shoe.stack } <br />
                        Teammates: {this.state.shoe.teammates} <br />
                        <br />
                    </div>
                    {this.state.shoe.open ? 
                        <div>
                            <a href={ this.state.shoe.link } className="shoe-button" >Visit Site</a>
                            <a href={ this.state.shoe.github } className="shoe-button remove" >GitHub</a>
                        </div>
                            : ''
                    }
                    
                </Modal>
            :
            <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
                >
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <div className = "modal-content">
                        <img alt="Shoe" src = { this.state.shoe.imgLink } style={{maxWidth: "300px"}}/> <br />
                        <span className="section-title">{ this.state.shoe.name }</span> <br />
                        {this.state.shoe.description} <br />
                        <span className="section-title">Stack</span> { this.state.shoe.stack } <br />
                        <br />
                    </div>
                    {this.state.shoe.open ? 
                        <div>
                            <a href={ this.state.shoe.link } className="shoe-button" >Visit Site</a>
                            <a href={ this.state.shoe.github } className="shoe-button remove" >GitHub</a>
                        </div>
                            : ''
                    }
                </Modal>
        )
    }
}
export default Shoe;

const customStyles = {
    content : {
        fontSize: '1.5vh',
        fontFamily: 'proxima-nova',
        top: '60%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
        'z-index': '2',
      }
  };
