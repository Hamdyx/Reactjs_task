const UserActionItem: React.FC<{ Icon?: any; text?: any }> = ({
	Icon,
	text,
}) => {
	return (
		<>
			{Icon && <Icon />} {text && text}
		</>
	);
};

export default UserActionItem;
