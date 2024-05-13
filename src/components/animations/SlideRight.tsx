import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
	children: ReactNode | ReactNode[];
	className: string;
};

const SlideRight = ({ children, className, ...props }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: "-16rem" }}
			whileInView={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.5 }}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default SlideRight;
