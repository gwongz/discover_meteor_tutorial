// Available in both environments - loads permissions logic first

ownsDocument = function(userId, doc){
	return doc && doc.userId == userId;
};