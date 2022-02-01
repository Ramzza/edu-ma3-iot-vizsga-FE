import React, { useState, useEffect } from 'react';
import HistoryDataService from '../services/historyService';

const ActionHistory = (props) => {
	const [actions, setActions] = useState([]);

	const onDataChange = (items) => {
		let actionsNew = [];

		items.forEach((item) => {
			let key = item.key;
			let data = item.val();
			actionsNew.push({
				key: key,
				title: data.time,
				description: data.value,
			});
		});

		if (actions.length !== actionsNew.length) {
			setActions(actionsNew);
		}
	};

	useEffect(() => {
		HistoryDataService.getAll().on('value', onDataChange);
	}, []);

	return (
		<div>
			<ul className="list-group">
				{actions &&
					actions.map((action, index) => (
						<li key={index}>
							{action.title} -{action.description}
						</li>
					))}
			</ul>
		</div>
	);
};

export default ActionHistory;
