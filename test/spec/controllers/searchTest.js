'use strict';

describe('Controller: SearchController', function () {

	beforeEach(module('stoqaApp'));
	var SearchController, scope;

	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		SearchController = $controller('SearchController', {
			$scope: scope
		});

		httpMock = $httpBackend;

		httpMock.expectJSONP().respond();

	}));

	it('should ...', function() {

	});
	
});