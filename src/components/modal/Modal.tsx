import React from "react";
import { ModelStyled, ModelWrapperStyled } from "./styles/model.styles";
import { IModal } from "./types/index.types";

const Modal = ({ toggle, conform }: IModal) => {
	return (
		<ModelWrapperStyled>
			<ModelStyled>
				<div>
					<p>Are you sure you?</p>
				</div>

				<div>
					<button onClick={() => toggle()}>Cancel</button>
					<button
						onClick={() => {
							conform();
							toggle();
						}}
					>
						Conform
					</button>
				</div>
			</ModelStyled>
		</ModelWrapperStyled>
	);
};

export default Modal;
