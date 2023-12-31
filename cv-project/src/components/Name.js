import React from 'react';
import data from '../data';
import Contact from './Contact';
import Social from './Social';
import Interests from './Interests';
import NameInput from './NameInput';
import ContactInput from './ContactInput';
import SocialInput from './SocialInput';
import IntereInput from './IntereInput';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEdit: false,
            contactEdit: false,
            socialEdit: false,
            socData: data.social,
            inteEdit: false,
        };
        this.editName = this.editName.bind(this);
        this.editContact = this.editContact.bind(this);
        this.editSocial = this.editSocial.bind(this);
        this.editInte = this.editInte.bind(this);
    }
    editName() {
        this.setState({ nameEdit: !this.state.nameEdit });
    }
    editContact() {
        this.setState({ contactEdit: !this.state.contactEdit });
    }
    editSocial() {
        this.setState({ socialEdit: !this.state.socialEdit });
    }
    editInte() {
        this.setState({ inteEdit: !this.state.inteEdit });
    }
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        {this.state.nameEdit ? (
                            <NameInput done={this.editName} />
                        ) : (
                            <div>
                                <span className="title">
                                    {' '}
                                    {data.name.first + ' '}{' '}
                                </span>
                                <span className="title">
                                    {' '}
                                    {data.name.last}{' '}
                                </span>
                                <i
                                    className="fa fa-pencil"
                                    aria-hidden="true"
                                    onClick={this.editName}
                                ></i>
                            </div>
                        )}
                    </div>
                    {this.state.contactEdit ? (
                        <ContactInput done={this.editContact} />
                    ) : (
                        <Contact data={data.contact} done={this.editContact} />
                    )}
                    {data.social && (
                        <div className="container has-text-black">
                            <div className="is-size-5 has-text-weight-bold per-heading">
                                Social
                                <i
                                    className="fa fa-pencil per-edit"
                                    aria-hidden="true"
                                    onClick={this.editSocial}
                                ></i>
                            </div>
                            {this.state.socialEdit ? (
                                <SocialInput done={this.editSocial} />
                            ) : null}
                            <Social
                                data={data.social}
                                edit={this.state.socialEdit}
                            />
                        </div>
                    )}
                    {data.interests && (
                        <div className="container has-text-black">
                            <div className="is-size-5 has-text-weight-bold per-heading">
                                Interests
                                <i
                                    className="fa fa-pencil per-edit"
                                    aria-hidden="true"
                                    onClick={this.editInte}
                                ></i>
                            </div>
                            {this.state.inteEdit ? (
                                <IntereInput done={this.editInte} />
                            ) : null}
                            <Interests
                                data={data.interests}
                                edit={this.state.inteEdit}
                            />
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Name;