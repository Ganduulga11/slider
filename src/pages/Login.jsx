import React from "react";
import "./Login.css";

function Login() {
	return (
		<div className="login-container">
			<div className="login-card">
				<h2>Нэвтрэх</h2>
				<div className="login-input-container">
					<input type="text" required="required" />
					<span>Нэвтрэх нэр</span>
				</div>
				<div className="login-input-container">
					<input type="text" required="required" />
					<span>Нууц үг</span>
				</div>
				<button>Нэвтрэх</button>
			</div>
		</div>
	);
}

export default Login;
