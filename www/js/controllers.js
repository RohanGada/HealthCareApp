angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {


	})
	.controller('PlaylistsCtrl', function ($scope) {
		$scope.playlists = [
			{
				title: 'Reggae',
				id: 1
        },
			{
				title: 'Chill',
				id: 2
        },
			{
				title: 'Dubstep',
				id: 3
        },
			{
				title: 'Indie',
				id: 4
        },
			{
				title: 'Rap',
				id: 5
        },
			{
				title: 'Cowbell',
				id: 6
        }
  ];
	})
	.controller('DoctorCtrl', function ($scope, $stateParams) {

	})
	.controller('DoctorSpecialitiesCtrl', function ($scope, $stateParams) {

		$scope.searchbar = false;
		$scope.toggleSearchbar = function () {
			$scope.searchbar = $scope.searchbar === false ? true : false;
		};
		$scope.specialities = [{
			id: 1,
			type: 'Cardiologist',
			job: 'diseases of the heart and blood vessels',
			imgurl: 'img/cardiology.png'
        }, {
			id: 2,
			type: 'ENT Specialist',
			job: 'Ear, Nose, and Throat',
			imgurl: 'img/ent.jpg'
        }];
	})
	.controller('DoctorSelectCtrl', function ($scope, $stateParams, $timeout, $ionicPopup) {
		$scope.params = $stateParams;
		$scope.searchType = $scope.params.name;
		$scope.searchbar = false;
		$scope.swipe = true;
		//SWIPE OFF INSTRUCTION CODE 
		$scope.swipeOff = function () {
			$scope.swipe = false;
			console.log($scope.swipe);
		};
		$timeout(function () {
			$scope.swipeOff();
		}, 2000);
		//        console.log($scope.swipe);
		//CONFIRM CALL POPUP CODE
		$scope.showConfirmCall = function () {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Confirm Call',
				template: 'Are you sure you want to call clinic?'
			});
			confirmPopup.then(function (res) {
				if (res) {
					console.log('You are sure');
				} else {
					confirmPopup.close();
				}
			});
		};
		$scope.doctordata = [
			{
				"name": "TaShya B. Bridges",
				"address": "P.O. Box 481, 1675 Eu Road",
				"exp": 8,
				"averagefee": "₹ 3790",
				"reviews": 10
	},
			{
				"name": "Tarik Rush",
				"address": "949-8948 Lorem, St.",
				"exp": 10,
				"averagefee": "₹ 1000",
				"reviews": 5
	},
			{
				"name": "Beck T. Holden",
				"address": "Ap #970-2284 Donec Rd.",
				"exp": 11,
				"averagefee": "₹ 3270",
				"reviews": 6
	},
			{
				"name": "Renee C. Glass",
				"address": "6932 Turpis Rd.",
				"exp": 5,
				"averagefee": "₹ 4470",
				"reviews": 7
	},
			{
				"name": "Oliver Young",
				"address": "190-9172 Lacinia Avenue",
				"exp": 18,
				"averagefee": "₹ 2780",
				"reviews": 10
	},
			{
				"name": "Martina E. Santiago",
				"address": "Ap #736-918 Pretium Street",
				"exp": 6,
				"averagefee": "₹ 4320",
				"reviews": 3
	},
			{
				"name": "Demetrius Villarreal",
				"address": "164-6769 Ligula. Rd.",
				"exp": 24,
				"averagefee": "₹ 1340",
				"reviews": 2
	},
			{
				"name": "Austin Sears",
				"address": "624-2971 Integer Ave",
				"exp": 20,
				"averagefee": "₹ 1100",
				"reviews": 7
	},
			{
				"name": "Timothy Hatfield",
				"address": "486-2706 Mauris Road",
				"exp": 10,
				"averagefee": "₹ 4980",
				"reviews": 2
	}
];
		$scope.toggleSearchbar = function () {
			$scope.searchbar = $scope.searchbar === false ? true : false;
		};
	})
	.controller('LoginCtrl', function ($scope, $stateParams) {
		//        $rootScope.hideBar = true;
		//        ionic.Platform.ready(function () {
		//            // hide the status bar using the StatusBar plugin
		//            StatusBar.hide();
		//        });
		//
		//        $scope.setShowBar = function (showit) {
		//            $ionicNavBarDelegate.showBar(showit);
		//
		//        };
		//        $scope.setShowBar(false);
		$scope.inputType = 'password';
		$scope.showPassword = function () {
			$scope.inputType = 'text';
		};
		$scope.hidePassword = function () {
			$scope.inputType = 'password';
		};

	})
	.controller('RequestChemistCtrl', function ($scope, $stateParams) {
		$scope.uploadtext = "<h2>Upload prescription</h2>";
		$scope.showpreview = false;
		$scope.upload = function () {
			$scope.showpreview = true;
			$scope.uploadtext = "<h2>Reupload / close preview</h2>";
		};
		$scope.closePreview = function () {
			$scope.showpreview = false;
			$scope.uploadtext = "<h2>Reupload prescription.</h2>";
		};
	})
	.controller('SelectAreaCtrl', function ($scope, $stateParams) {
		$scope.areasTemp = [{
			name: 'Sion'
        }, {
			name: 'Matunga'
        }, {
			name: 'Kurla'
        }];
	})
	.controller('ProfileCtrl', function ($scope, $stateParams) {

	})
	.controller('LaboratoryprofileCtrl', function ($scope, $stateParams) {

	})
	.controller('chemistselectCtrl', function ($scope, $stateParams) {
		$scope.chemistselect = [
			{
				img: "img/chemist_icon.jpg",
				name: "New Empire Chemists",
				locate: "Sion (West) ,Mumbai"
	},
			{
				img: "img/chemist_icon.jpg",
				name: "Noble Medicals",
				locate: "Sion (East) ,Mumbai"
	},
			{
				img: "img/chemist_icon.jpg",
				name: "National Chemist",
				locate: "Kurla (West) ,Mumbai"
	},
			{
				img: "img/chemist_icon.jpg",
				name: "City Chemist",
				locate: "Vikroli (West) ,Mumbai"
	},
			{
				img: "img/chemist_icon.jpg",
				name: "Maharashtra Chemist",
				locate: "Bhandup (East) ,Mumbai"
	},
			{
				img: "img/chemist_icon.jpg",
				name: "Helpcare Chemist",
				locate: "Vidyavihar (East) ,Mumbai"
			},
			{
				img: "img/chemist_icon.jpg",
				name: "Health Chemist",
				locate: "Kanjurmarg (West) ,Mumbai"
			},
			{
			img: "img/chemist_icon.jpg",
				name: "Lifecare Chemist",
				locate: "Ghatkopar (West) ,Mumbai"
			}
];
	})
	.controller('chemisthistoryCtrl', function ($scope, $stateParams) {
		$scope.chemist = [{
				name: "Lifecare Diagnostics",
				date: "11-09-2015",
				cost: "500"
		},
			{
				name: "Health Diagnostics",
				date: "21-09-2015",
				cost: "500"
											},
			{
				name: "Suburban Diagnostics",
				date: "01-09-2015",
				cost: "500"
			}
										 ];
	})
	.controller('ChemistRecordCtrl', function ($scope, $stateParams) {
		if ($scope.isChecked1 === true || $scope.isChecked2 === true || $scope.isChecked3 === true)
			$scope.isChecked = true;
	})
	.controller('AboutusCtrl', function ($scope, $stateParams) {
		if ($scope.isChecked1 === true || $scope.isChecked2 === true || $scope.isChecked3 === true)
			$scope.isChecked = true;
	})

.controller('LaboratoryTestTypesCtrl', function ($scope, $stateParams) {

		$scope.lab = [
			{
				img: "img/noclinic.jpg",
				name: "Blood Test",
				locate: "CBC,Blood Glucose"
		},
			{
				img: "img/noclinic.jpg",
				name: "Endoscopy Test",
				locate: "Pancreatic Endsoscopy"
			}
	];

	})
	.controller('LaboratorySelectCtrl', function ($scope, $stateParams, $timeout) {
		$scope.params = $stateParams;
		$scope.searchType = $scope.params.name;
		$scope.searchbar = false;
		$scope.swipe = true;
		//SWIPE OFF INSTRUCTION CODE 
		$scope.swipeOff = function () {
			$scope.swipe = false;
			console.log($scope.swipe);
		};
		$timeout(function () {
			$scope.swipeOff();
		}, 2000);
		//        console.log($scope.swipe);
		//CONFIRM CALL POPUP CODE
		$scope.showConfirmCall = function () {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Confirm Call',
				template: 'Are you sure you want to call clinic?'
			});
			confirmPopup.then(function (res) {
				if (res) {
					console.log('You are sure');
				} else {
					confirmPopup.close();
				}
			});
		};
		$scope.toggleSearchbar = function () {
			$scope.searchbar = $scope.searchbar === false ? true : false;
		};
		$scope.labselect = [
			{
				labimg: 'img/noclinic.jpg',
				labname: 'Suburban Diagnostics',
				labadd: 'Andheri East, Mumbai'
			},
			{
				labimg: "img/noclinic.jpg",
				labname: "SRL Diagnostics",
				labadd: "Malad West, Mumbai"

				},
			{
				labimg: "img/noclinic.jpg",
				labname: "Thyrocare Collection Center",
				labadd: "Malad West, Mumbai"
					},
			{
				labimg: "img/noclinic.jpg",
				labname: "Life Care Diagnostics",
				labadd: "Andheri, Mumbai"
					},
			{
				labimg: "img/noclinic.jpg",
				labname: "Noor Imaging Center",
				labadd: "Jogeshwari West,Mumbai"
					},
			{
				labimg: "img/noclinic.jpg",
				labname: "SP Singh Diagnostics",
				labadd: "Kurla West, Mumbai"
					}

	];
	})
	.controller('ReportViewerCtrl', function ($scope, $stateParams, $ionicModal, $timeout) {
		$scope.report = {
			imgurl: 'img/reportsample.png'
		};
		$ionicModal.fromTemplateUrl('templates/imageviewer.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.modal = modal;
		});
		$scope.viewImage = function () {
			$scope.modal.show();
		};
		$scope.closeImageViewer = function () {
			$scope.modal.hide();
		};
		//Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function () {
			$scope.modal.remove();
		});
		// Execute action on hide modal
		$scope.$on('modal.hide', function () {
			// Execute action
		});
		// Execute action on remove modal
		$scope.$on('modal.removed', function () {
			// Execute action});
		})
		$scope.$on('modal.shown', function () {
			console.log('Modal is shown!');
		});
	})
	.controller('ReportHistoryCtrl', function ($scope, $stateParams) {
		$scope.labhistory = [{
				name: 'RKB Diagnostic',
				date: '30-08-2015',
				totalcost: '1500',
				tests: [
					{
						name: 'Blood Test',
						color: 'orange',
						cost: 500
                    },
					{
						name: 'Urine Test',
						color: 'coral',
						cost: 300
                    },
					{
						name: 'Ultrasound',
						color: 'darkseagreen',
						cost: 1000
                    },
            ]
        },
			{
				name: 'Shivam Diagnostic',
				date: '10-08-2015',
				totalcost: '1800',
				tests: [
					{
						name: 'Blood Test',
						color: 'orange',
						cost: 500
                    },
					{
						name: 'CT scan',
						color: 'darkseagreen',
						cost: 1000
                    },
            ]
        }]
	});