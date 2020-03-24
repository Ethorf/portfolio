import React, { useRef, useState } from 'react';
import axios from 'axios';
import { TimelineMax } from 'gsap';

import './contact.scss';
import SocialButtons from '../socialButtons/socialButtons';

function Contact(props) {
	const contentTl = new TimelineMax({ paused: true });
	let modalContentContainer = useRef(null);
	const [contentAnimation, setContentAnimation] = useState(null);
	let [contactOpen, setContactOpen] = useState(false);

	const openModalContentAnimation = () => {
		setContentAnimation(
			contentTl
				.to(modalContentContainer, { duration: 0.2, y: 20, opacity: 1 })
				.to(modalContentContainer, { duration: 2.3, opacity: 1 })
				.to(modalContentContainer, { duration: 0.5, y: -20, opacity: 0 })
				.play()
		);
	};
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: 'message'
	});

	const { name, email, message } = formData;
	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const submitContact = ({ name, email, message }) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body = JSON.stringify({ name, email, message });
		try {
			axios.post('http://www.notyourthoughts.com/api/contact', body, config);
		} catch (err) {
			console.log('Error submitting form ');
		}
	};
	const onSubmit = (e) => {
		e.preventDefault();
		submitContact({ name, email, message });
		openModalContentAnimation();
	};
	const openContact = () => {
		if (contactOpen) {
			setContactOpen(false);
		} else {
			setContactOpen(true);
		}
	};
	return (
		<div className={`contact ${props.webSectionOpen || props.musicSectionOpen ? 'invisible' : ''}`}>
			<h2 onClick={openContact} className={'contact__header'}>
				Get In Touch
			</h2>
			<div className={`contact ${contactOpen ? 'open' : 'closed'}`}>
				<form onSubmit={(e) => onSubmit(e)} className={`contact__form ${contactOpen ? 'open' : 'closed'}`}>
					<div className={`contact__form-name-email-input-modalize-container`}>
						<div className={`contact__form-name-email-input-container`}>
							<div className={`contact__input-container`}>
								<h3 className={'contact__form-identifier'}>Name</h3>
								<input
									name="name"
									value={name}
									onChange={(e) => onChange(e)}
									placeholder="Your name here"
									className={`contact__input contact__name`}
									required
								></input>
							</div>
							<div className={`contact__input-container`}>
								<h3 className={`contact__form-identifier`}>Email</h3>
								<input
									placeholder="Your email here"
									type="email"
									name="email"
									className={`contact__input contact__email`}
									onChange={(e) => onChange(e)}
									required
								></input>
							</div>
						</div>
					</div>

					<h3 className={'contact__form-identifier contact__message-identifier'}>Message</h3>
					<textarea
						required
						placeholder="Your message here"
						name="message"
						onChange={(e) => onChange(e)}
						className={`contact__input contact__message`}
					></textarea>
					<button className={'contact__form-submit-button'} type="submit">
						Submit
					</button>
				</form>
				<h2 ref={(h2) => (modalContentContainer = h2)} className={'contact__modalize'}>
					Message Submitted! Thank you!
				</h2>
			</div>
		</div>
	);
}

export default Contact;
