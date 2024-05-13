import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
	children: ReactNode | ReactNode[];
	className: string;
};

const ScaleUp = ({ children, className, ...props }: Props) => {
	return (
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.5 }}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default ScaleUp;
