let mongoose = require('mongoose');

let surveyModel = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			default: 1,
			required: [true, 'userId is required'],
			ref: 'User',
		},
		title: {
			type: String,
			default: '',
			trim: true,
			required: 'Title is required',
		},
		description: {
			type: String,
			default: '',
			trim: true,
			required: 'Description is required',
		},
	},
	{
		collection: 'survey',
	}
);

module.exports = mongoose.model('Survey', surveyModel);
