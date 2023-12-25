import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import HistoryDataService from '../services/historyService';

const ActionHistory = (props) => {
	const [actions, setActions] = useState([]);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 250 },
		{ field: 'timestamp', headerName: 'Timestamp', width: 300 },
		{ field: 'commandType', headerName: 'Key', width: 200 },
		{
			field: 'commandValue',
			headerName: 'Value',
			width: 100,
		},
	];

	const onDataChange = (items) => {
		let actionsNew = [];

		items.forEach((item) => {
			const key = item.key;
			const data = item.val();
			const date = new Date(data.time);
			actionsNew.push({
				key: key,
				id: key,
				timestamp: date.toLocaleString(),
				date: date,
				commandType: data.value.split('=')[0],
				commandValue: data.value.split('=')[1],
			});
		});

		if (actions.length !== actionsNew.length) {
			actionsNew.sort((a, b) => b.date.getTime() - a.date.getTime());
			setActions(actionsNew);
		}
	};

	useEffect(() => {
		HistoryDataService.getAll().on('value', onDataChange);
	}, []);

	return (
		<div style={{ height: 400 }}>
			<DataGrid
				rows={actions}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
			/>
		</div>
	);
};

export default ActionHistory;
