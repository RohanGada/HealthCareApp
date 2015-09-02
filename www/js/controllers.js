angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
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
            imgurl: 'img/ent-doctors-bhopal_cropped.jpg'
        }];
    })
    .controller('DoctorSelectCtrl', function ($scope, $stateParams, $timeout) {
        $scope.params = $stateParams;
        $scope.searchType = $scope.params.name;
        $scope.searchbar = false;
        $scope.swipe = true;
        $scope.swipeOff = function () {
            $scope.swipe = false;
            console.log($scope.swipe);
        };
        $timeout(function () {
            $scope.swipeOff();
        }, 2000);

        console.log($scope.swipe);

        $scope.doctordata = [
            {
                "name": "TaShya B. Bridges",
                "address": "P.O. Box 481, 1675 Eu Road",
                "exp": 8,
                "averagefee": "₹0379",
                "reviews": 10
	},
            {
                "name": "Tarik Rush",
                "address": "949-8948 Lorem, St.",
                "exp": 10,
                "averagefee": "₹0100",
                "reviews": 5
	},
            {
                "name": "Jena Oconnor",
                "address": "865-2624 Donec Road",
                "exp": 13,
                "averagefee": "₹0371",
                "reviews": 9
	},
            {
                "name": "Ocean M. Castro",
                "address": "9131 Nec Av.",
                "exp": 23,
                "averagefee": "₹0124",
                "reviews": 4
	},
            {
                "name": "Carson Luna",
                "address": "Ap #520-8741 Mus. Rd.",
                "exp": 15,
                "averagefee": "₹0457",
                "reviews": 6
	},
            {
                "name": "Thane I. Levine",
                "address": "9417 Consequat St.",
                "exp": 6,
                "averagefee": "₹0400",
                "reviews": 2
	},
            {
                "name": "Jackson Holden",
                "address": "Ap #547-5033 Magnis Ave",
                "exp": 22,
                "averagefee": "₹0164",
                "reviews": 8
	},
            {
                "name": "Wylie S. Howard",
                "address": "3922 Auctor Ave",
                "exp": 14,
                "averagefee": "₹0486",
                "reviews": 2
	},
            {
                "name": "Reece Y. Stafford",
                "address": "P.O. Box 771, 7169 Risus. Road",
                "exp": 25,
                "averagefee": "₹0273",
                "reviews": 10
	},
            {
                "name": "Paki Gaines",
                "address": "862-1532 Ante. St.",
                "exp": 8,
                "averagefee": "₹0379",
                "reviews": 4
	},
            {
                "name": "Finn Meyers",
                "address": "Ap #492-6917 Nibh St.",
                "exp": 6,
                "averagefee": "₹0167",
                "reviews": 7
	},
            {
                "name": "Maia Hyde",
                "address": "190-1329 Enim. Road",
                "exp": 12,
                "averagefee": "₹0379",
                "reviews": 3
	},
            {
                "name": "Sierra B. Sanford",
                "address": "P.O. Box 868, 1350 Magna. Avenue",
                "exp": 24,
                "averagefee": "₹0272",
                "reviews": 2
	},
            {
                "name": "Armando Fitzgerald",
                "address": "156-929 Libero. Rd.",
                "exp": 18,
                "averagefee": "₹0221",
                "reviews": 4
	},
            {
                "name": "Ria H. Odonnell",
                "address": "P.O. Box 741, 6408 Sodales St.",
                "exp": 23,
                "averagefee": "₹0366",
                "reviews": 3
	},
            {
                "name": "Liberty G. Young",
                "address": "3700 Vel Rd.",
                "exp": 19,
                "averagefee": "₹0232",
                "reviews": 1
	},
            {
                "name": "Selma H. Schultz",
                "address": "1335 Porttitor Rd.",
                "exp": 12,
                "averagefee": "₹0119",
                "reviews": 6
	},
            {
                "name": "Brooke Haynes",
                "address": "P.O. Box 774, 7483 Non Street",
                "exp": 19,
                "averagefee": "₹0118",
                "reviews": 4
	},
            {
                "name": "Kaye Lyons",
                "address": "Ap #875-4948 A Rd.",
                "exp": 21,
                "averagefee": "₹0466",
                "reviews": 4
	},
            {
                "name": "Skyler Y. Ford",
                "address": "724-2455 Pede, Street",
                "exp": 14,
                "averagefee": "₹0258",
                "reviews": 9
	},
            {
                "name": "Vincent A. Schneider",
                "address": "330-9934 Rutrum Avenue",
                "exp": 15,
                "averagefee": "₹0431",
                "reviews": 8
	},
            {
                "name": "Rafael W. Ferguson",
                "address": "801-3670 Fermentum Street",
                "exp": 6,
                "averagefee": "₹0133",
                "reviews": 8
	},
            {
                "name": "Keaton Kerr",
                "address": "Ap #790-9486 Cursus, Avenue",
                "exp": 15,
                "averagefee": "₹0372",
                "reviews": 2
	},
            {
                "name": "Wallace Brady",
                "address": "Ap #324-9859 Nulla. Road",
                "exp": 22,
                "averagefee": "₹0110",
                "reviews": 4
	},
            {
                "name": "Quinlan Finley",
                "address": "8086 Interdum Ave",
                "exp": 15,
                "averagefee": "₹0242",
                "reviews": 8
	},
            {
                "name": "Kellie Dunn",
                "address": "Ap #661-8355 Auctor St.",
                "exp": 21,
                "averagefee": "₹0243",
                "reviews": 7
	},
            {
                "name": "Fallon A. Thomas",
                "address": "Ap #307-1860 Eu, Street",
                "exp": 20,
                "averagefee": "₹0102",
                "reviews": 3
	},
            {
                "name": "Timon Macias",
                "address": "P.O. Box 565, 2916 Mauris Avenue",
                "exp": 18,
                "averagefee": "₹0285",
                "reviews": 8
	},
            {
                "name": "Walker Travis",
                "address": "2228 Sed, Rd.",
                "exp": 13,
                "averagefee": "₹0313",
                "reviews": 6
	},
            {
                "name": "Alice F. Macias",
                "address": "P.O. Box 506, 3786 Euismod Avenue",
                "exp": 9,
                "averagefee": "₹0423",
                "reviews": 2
	},
            {
                "name": "Nadine Chaney",
                "address": "P.O. Box 237, 8019 Sem Rd.",
                "exp": 18,
                "averagefee": "₹0358",
                "reviews": 8
	},
            {
                "name": "Ronan Irwin",
                "address": "618-3280 Vitae Avenue",
                "exp": 14,
                "averagefee": "₹0167",
                "reviews": 9
	},
            {
                "name": "Maya Q. Norton",
                "address": "P.O. Box 842, 9414 Senectus St.",
                "exp": 16,
                "averagefee": "₹0489",
                "reviews": 8
	},
            {
                "name": "Hayley Gibson",
                "address": "P.O. Box 152, 2420 Cursus Avenue",
                "exp": 24,
                "averagefee": "₹0463",
                "reviews": 4
	},
            {
                "name": "Jonah N. Jones",
                "address": "P.O. Box 778, 7423 Aenean Street",
                "exp": 21,
                "averagefee": "₹0173",
                "reviews": 4
	},
            {
                "name": "Lara Mccarty",
                "address": "Ap #748-7441 Accumsan St.",
                "exp": 14,
                "averagefee": "₹0423",
                "reviews": 6
	},
            {
                "name": "Tad Mayo",
                "address": "263-9838 Nunc Street",
                "exp": 7,
                "averagefee": "₹0403",
                "reviews": 9
	},
            {
                "name": "Hanae Henson",
                "address": "4006 Eros Ave",
                "exp": 23,
                "averagefee": "₹0153",
                "reviews": 5
	},
            {
                "name": "Portia Gonzalez",
                "address": "646-3637 Ornare, Rd.",
                "exp": 8,
                "averagefee": "₹0259",
                "reviews": 7
	},
            {
                "name": "Beck T. Holden",
                "address": "Ap #970-2284 Donec Rd.",
                "exp": 11,
                "averagefee": "₹0327",
                "reviews": 6
	},
            {
                "name": "Renee C. Glass",
                "address": "6932 Turpis Rd.",
                "exp": 5,
                "averagefee": "₹0447",
                "reviews": 7
	},
            {
                "name": "Oliver Young",
                "address": "190-9172 Lacinia Avenue",
                "exp": 18,
                "averagefee": "₹0278",
                "reviews": 10
	},
            {
                "name": "Martina E. Santiago",
                "address": "Ap #736-918 Pretium Street",
                "exp": 6,
                "averagefee": "₹0432",
                "reviews": 3
	},
            {
                "name": "Demetrius Villarreal",
                "address": "164-6769 Ligula. Rd.",
                "exp": 24,
                "averagefee": "₹0134",
                "reviews": 2
	},
            {
                "name": "Austin Sears",
                "address": "624-2971 Integer Ave",
                "exp": 20,
                "averagefee": "₹0110",
                "reviews": 7
	},
            {
                "name": "Timothy Hatfield",
                "address": "486-2706 Mauris Road",
                "exp": 10,
                "averagefee": "₹0498",
                "reviews": 2
	}
];
        $scope.toggleSearchbar = function () {
            $scope.searchbar = $scope.searchbar === false ? true : false;
        };
    })
    .controller('LoginCtrl', function ($scope, $stateParams, $ionicNavBarDelegate) {
        //        ionic.Platform.ready(function () {
        //            // hide the status bar using the StatusBar plugin
        //            StatusBar.hide();
        //        });

        $scope.setShowBar = function (showit) {
            $ionicNavBarDelegate.showBar(showit);

        };
        $scope.setShowBar(false);

    })
    .controller('RequestChemistCtrl', function ($scope, $stateParams) {})
    .controller('SelectAreaCtrl', function ($scope, $stateParams) {
        $scope.areasTemp = [{
            name: 'Sion'
        }, {
            name: 'Matunga'
        }, {
            name: 'Kurla'
        }];
    });