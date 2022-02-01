import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import HistoryDataService from '../services/historyService';

const ActionHistory = (props) => {
	const [actions, setActions] = useState([]);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 300 },
		{ field: 'timestamp', headerName: 'Timestamp', width: 200 },
		{ field: 'commandType', headerName: 'Key', width: 130 },
		{
			field: 'commandValue',
			headerName: 'Value',
			width: 90,
		},
	];

	const onDataChange = (items) => {
		let actionsNew = [];

		items.forEach((item) => {
			const key = item.key;
			const data = item.val();
			actionsNew.push({
				key: key,
				id: key,
				timestamp: data.time,
				commandType: data.value.split('=')[0],
				commandValue: data.value.split('=')[1],
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
