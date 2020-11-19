import React from 'react';
import {connect} from "react-redux";
import styles from './ContactsForm.module.sass';
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, phoneLength, required} from "../../../utils/validators/validators";
import {sendMail, setSendingAccomplished} from "../../../redux/contactsRequest_reducer";
import {Link} from "react-router-dom";
import SuccessNotification from "../SuccessNotification/SuccessNotification";
import Preloader from "../Preloader/Preloader";
import {Accordion} from "react-bootstrap";
import cn from 'classnames';

const maxLength20 = maxLengthCreator(20);
const maxLength40 = maxLengthCreator(40);

const ContactsForm = ({handleSubmit, error, pristine, submitting, invalid}) => {
    return <>
        <form onSubmit={handleSubmit}>
            <div className={styles.form__fieldsBox}>
                {createField('Телефон', 'phone',
                    [required, phoneLength], Input, {mask:"+7 (999) 999-9999"})}
                {createField('Имя', 'name',
                    [required, maxLength20], Input)}
                {createField('Комментарий', 'comment',
                    [maxLength40], Textarea)}
                <div className={`${styles.form__agreementBox} clearfix`}>
                    <Field placeholder={null}
                           name={'policyAgreement'}
                           validate={[required]}
                           component={Input}
                           props={{type: 'checkbox'}}/>
                    <label htmlFor="policyAgreement">Заполняя форму, вы соглашаетесь с <Link
                        to="/privacy"> Политикой конфиденциальности сайта</Link>
                    </label>
                </div>
                {error && <div className={styles.formSummaryError}>{error}</div>}
                <div>
                    <button className={styles.form__btn} disabled={invalid || pristine || submitting}>Отправить</button>
                </div>
            </div>
        </form>
    </>
};

const ContactsReduxForm = reduxForm({ form: 'contactsRequest' })(ContactsForm);

class ContactsRequest extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {isAccordionOpen: false};
    }

    onSubmit = (formData) => {
        this.props.sendMail(formData.phone, formData.name, formData.comment);
    };

    render() {
        return <div className={cn(styles.contactsForm__accordion, {[styles.contactsForm__isOpen]: !this.state.isAccordionOpen})}>
            <Accordion>
                <Accordion.Toggle onClick={() => this.setState({
                    isAccordionOpen: !this.state.isAccordionOpen
                })} eventKey="0">
                    <p className={styles.form__title}>
                        Оставить заявку на звонок
                    </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div className={styles.contactsForm}>
                        {this.props.isSendingAccomplished && this.props.sendMailSuccess &&
                        <div>
                            <SuccessNotification notification={'Запрос отправлен, мы свяжемся с Вами в ближайшее время!'}
                                                 setSendingAccomplished={this.props.setSendingAccomplished}/>
                        </div>
                        }
                        {this.props.isSendingAccomplished && this.props.sendMailSuccess === false &&
                        <div>
                            <SuccessNotification notification={'Произошла ошибка, попробуйте еще раз!'}
                                                 setSendingAccomplished={this.props.setSendingAccomplished}/>
                        </div>
                        }
                        <ContactsReduxForm onSubmit={this.onSubmit}/>
                        {/*<ContactsReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>*/}
                        {this.props.isSendingInProcess &&
                        <div className={styles.contactsForm__preloaderBox}>
                            <Preloader/>
                        </div>
                        }
                    </div>
                </Accordion.Collapse>
            </Accordion>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    sendMailSuccess: state.contactsRequest.sendMailSuccess,
    isSendingInProcess: state.contactsRequest.isSendingInProcess,
    isSendingAccomplished: state.contactsRequest.isSendingAccomplished,
});

export default connect(mapStateToProps, {
    sendMail,
    setSendingAccomplished
})(ContactsRequest);