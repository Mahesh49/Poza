$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestScenarios/Email.feature");
formatter.feature({
  "line": 1,
  "name": "Email Validation",
  "description": "\r\nAs a User\r\nI should see email validations\r\nSo that I know if I entered valid email address",
  "id": "email-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"\u003cEmail Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "email-validation;invalid-email-validation;",
  "rows": [
    {
      "cells": [
        "Email Address"
      ],
      "line": 16,
      "id": "email-validation;invalid-email-validation;;1"
    },
    {
      "cells": [
        "mahesh"
      ],
      "line": 17,
      "id": "email-validation;invalid-email-validation;;2"
    },
    {
      "cells": [
        "#@%^%#$@#$@#.com"
      ],
      "line": 18,
      "id": "email-validation;invalid-email-validation;;3"
    },
    {
      "cells": [
        "@domain.com"
      ],
      "line": 19,
      "id": "email-validation;invalid-email-validation;;4"
    },
    {
      "cells": [
        "Joe Smith \u003cemail@domain.com\u003e"
      ],
      "line": 20,
      "id": "email-validation;invalid-email-validation;;5"
    },
    {
      "cells": [
        "email1.domain.com"
      ],
      "line": 21,
      "id": "email-validation;invalid-email-validation;;6"
    },
    {
      "cells": [
        "email2@domain@domain.com"
      ],
      "line": 22,
      "id": "email-validation;invalid-email-validation;;7"
    },
    {
      "cells": [
        ".email3@domain.com"
      ],
      "line": 23,
      "id": "email-validation;invalid-email-validation;;8"
    },
    {
      "cells": [
        "email.@domain.com"
      ],
      "line": 24,
      "id": "email-validation;invalid-email-validation;;9"
    },
    {
      "cells": [
        "email..email@domain.com"
      ],
      "line": 25,
      "id": "email-validation;invalid-email-validation;;10"
    },
    {
      "cells": [
        "email4@domain.com (Joe Smith)"
      ],
      "line": 26,
      "id": "email-validation;invalid-email-validation;;11"
    },
    {
      "cells": [
        "email5@domain"
      ],
      "line": 27,
      "id": "email-validation;invalid-email-validation;;12"
    },
    {
      "cells": [
        "email6@-domain.com"
      ],
      "line": 28,
      "id": "email-validation;invalid-email-validation;;13"
    },
    {
      "cells": [
        "email7@domain.web"
      ],
      "line": 29,
      "id": "email-validation;invalid-email-validation;;14"
    },
    {
      "cells": [
        "email8@111.222.333.44444"
      ],
      "line": 30,
      "id": "email-validation;invalid-email-validation;;15"
    },
    {
      "cells": [
        "email9@domain..com"
      ],
      "line": 31,
      "id": "email-validation;invalid-email-validation;;16"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"mahesh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 8321084874,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1483158315,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 3048126552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahesh",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 183366797,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1576046631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 91106278,
  "status": "passed"
});
formatter.after({
  "duration": 276265,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"#@%^%#$@#$@#.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 979773643,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1447020637,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1326670045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#@%^%#$@#$@#.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 285463375,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1248475517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 77255825,
  "status": "passed"
});
formatter.after({
  "duration": 109052,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 820502195,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1152475159,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1194750966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 219744391,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1230156928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 68750629,
  "status": "passed"
});
formatter.after({
  "duration": 100926,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"Joe Smith \u003cemail@domain.com\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 789472851,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 998763222,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1327566410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe Smith \u003cemail@domain.com\u003e",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 345121208,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1178552260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 77637721,
  "status": "passed"
});
formatter.after({
  "duration": 125730,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email1.domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 1404366782,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 935273176,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1076523680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email1.domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 257442154,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1160400028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 73690896,
  "status": "passed"
});
formatter.after({
  "duration": 99643,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email2@domain@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 797724449,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 3374809854,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1271726677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email2@domain@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 403777902,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1239974597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 66685484,
  "status": "passed"
});
formatter.after({
  "duration": 82538,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \".email3@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 3387088248,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1050797683,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1183699085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".email3@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 318947884,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1265672370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 76037437,
  "status": "passed"
});
formatter.after({
  "duration": 80827,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email.@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 954799889,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1129354006,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1152393049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email.@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 246002391,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1105690160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 56353773,
  "status": "passed"
});
formatter.after({
  "duration": 88525,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email..email@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 739967968,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1097947043,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1906497144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email..email@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 305049105,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1095301143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 64077217,
  "status": "passed"
});
formatter.after({
  "duration": 77406,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email4@domain.com (Joe Smith)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 885544629,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 993910197,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1319639829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email4@domain.com (Joe Smith)",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 390766507,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1112803341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 75557180,
  "status": "passed"
});
formatter.after({
  "duration": 150107,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email5@domain\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 768664883,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1003597432,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1257666246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email5@domain",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 226940536,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1184530018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 64098172,
  "status": "passed"
});
formatter.after({
  "duration": 135567,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email6@-domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 835713018,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1151541161,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1169777213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email6@-domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 275543496,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1260000385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 358905803,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.zopa.test.steps.HomepageSteps.i_should_see_Error_summary_box(HomepageSteps.java:57)\r\n\tat ✽.Then I should see Error \"Please enter a valid email address\"(TestScenarios/Email.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 528307535,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email7@domain.web\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 1008474406,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 979342566,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1180957391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email7@domain.web",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 255004095,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1141864190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 455532248,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.zopa.test.steps.HomepageSteps.i_should_see_Error_summary_box(HomepageSteps.java:57)\r\n\tat ✽.Then I should see Error \"Please enter a valid email address\"(TestScenarios/Email.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 421330990,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email8@111.222.333.44444\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 815010681,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1036689354,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1186599440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email8@111.222.333.44444",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 324075464,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1225524145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 366405155,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.zopa.test.steps.HomepageSteps.i_should_see_Error_summary_box(HomepageSteps.java:57)\r\n\tat ✽.Then I should see Error \"Please enter a valid email address\"(TestScenarios/Email.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 397531577,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Invalid Email validation",
  "description": "",
  "id": "email-validation;invalid-email-validation;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email9@domain..com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 971898808,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1132140605,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1390366650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email9@domain..com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 277299019,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1132390354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 69604654,
  "status": "passed"
});
formatter.after({
  "duration": 100499,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"\u003cEmail Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "email-validation;valid-email-validation;",
  "rows": [
    {
      "cells": [
        "Email Address"
      ],
      "line": 42,
      "id": "email-validation;valid-email-validation;;1"
    },
    {
      "cells": [
        "email10@domain.com"
      ],
      "line": 43,
      "id": "email-validation;valid-email-validation;;2"
    },
    {
      "cells": [
        "firstname.lastname@domain.com"
      ],
      "line": 44,
      "id": "email-validation;valid-email-validation;;3"
    },
    {
      "cells": [
        "email11@subdomain.domain.com"
      ],
      "line": 45,
      "id": "email-validation;valid-email-validation;;4"
    },
    {
      "cells": [
        "firstname+lastname@domain.com"
      ],
      "line": 46,
      "id": "email-validation;valid-email-validation;;5"
    },
    {
      "cells": [
        "email12@123.123.123.123"
      ],
      "line": 47,
      "id": "email-validation;valid-email-validation;;6"
    },
    {
      "cells": [
        "email13@[123.123.123.123]"
      ],
      "line": 48,
      "id": "email-validation;valid-email-validation;;7"
    },
    {
      "cells": [
        "1234567890@domain.com"
      ],
      "line": 49,
      "id": "email-validation;valid-email-validation;;8"
    },
    {
      "cells": [
        "email15@domain-one.com"
      ],
      "line": 50,
      "id": "email-validation;valid-email-validation;;9"
    },
    {
      "cells": [
        "_______@domain.com"
      ],
      "line": 51,
      "id": "email-validation;valid-email-validation;;10"
    },
    {
      "cells": [
        "email16@domain.london"
      ],
      "line": 52,
      "id": "email-validation;valid-email-validation;;11"
    },
    {
      "cells": [
        "email17@domain.co.jp"
      ],
      "line": 53,
      "id": "email-validation;valid-email-validation;;12"
    },
    {
      "cells": [
        "firstname-lastname@domain.com"
      ],
      "line": 54,
      "id": "email-validation;valid-email-validation;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"email10@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 783500653,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1060128682,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1296323239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email10@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 280130093,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1498041128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 360860612,
  "status": "passed"
});
formatter.after({
  "duration": 551674,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"firstname.lastname@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 925964842,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 969202446,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1672826605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname.lastname@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 377797450,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 2166649774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 359703806,
  "status": "passed"
});
formatter.after({
  "duration": 127441,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"email11@subdomain.domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 1091445409,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1036391706,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1447611655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email11@subdomain.domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 356022983,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1851401532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 346357558,
  "status": "passed"
});
formatter.after({
  "duration": 79116,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"firstname+lastname@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 784263162,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1120772259,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1246079796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname+lastname@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 446618213,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1243613083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 385739426,
  "status": "passed"
});
formatter.after({
  "duration": 78261,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"email12@123.123.123.123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 905081607,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1032474816,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 4955246361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email12@123.123.123.123",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 343663333,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1829584726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 357274300,
  "status": "passed"
});
formatter.after({
  "duration": 79116,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"email13@[123.123.123.123]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 716062497,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1049705026,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1237414656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email13@[123.123.123.123]",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 331075317,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1171437797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 70945352,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat com.zopa.test.steps.HomepageSteps.i_should_not_see_Error_summary_box(HomepageSteps.java:62)\r\n\tat ✽.Then I should not see Error \"Please enter a valid email address\"(TestScenarios/Email.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 371219265,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"1234567890@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 951098966,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1088936786,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1226629631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 357396181,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1255912433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 361035523,
  "status": "passed"
});
formatter.after({
  "duration": 68425,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"email15@domain-one.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 813187589,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1163047638,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1181671574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email15@domain-one.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 324582662,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1596376481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 352542728,
  "status": "passed"
});
formatter.after({
  "duration": 64575,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"_______@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 692902429,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 994283112,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 2218221512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_______@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 290388674,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1331226279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 347292411,
  "status": "passed"
});
formatter.after({
  "duration": 79544,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"email16@domain.london\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 789808988,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1150334319,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1236215084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email16@domain.london",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 280796806,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1407545967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 344789776,
  "status": "passed"
});
formatter.after({
  "duration": 55167,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"email17@domain.co.jp\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 782495237,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1429194278,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1231974032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email17@domain.co.jp",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 343290845,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1355978506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 354307659,
  "status": "passed"
});
formatter.after({
  "duration": 112473,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Valid Email validation",
  "description": "",
  "id": "email-validation;valid-email-validation;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Email address \"firstname-lastname@domain.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should not see Error \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 972575785,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1047517144,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1227326281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname-lastname@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 366077573,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1546425555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 344321494,
  "status": "passed"
});
formatter.after({
  "duration": 62010,
  "status": "passed"
});
formatter.uri("TestScenarios/Title.feature");
formatter.feature({
  "line": 1,
  "name": "Title Validation",
  "description": "\r\nAs a User\r\nI should see Title validations\r\nSo that I know if I seelcted a Title",
  "id": "title-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Title",
  "description": "",
  "id": "title-validation;title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email@domain.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Title \"\u003cTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should not see Error \"Please select your title\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "title-validation;title;",
  "rows": [
    {
      "cells": [
        "Title"
      ],
      "line": 17,
      "id": "title-validation;title;;1"
    },
    {
      "cells": [
        "Mr"
      ],
      "line": 18,
      "id": "title-validation;title;;2"
    },
    {
      "cells": [
        "Ms"
      ],
      "line": 19,
      "id": "title-validation;title;;3"
    },
    {
      "cells": [
        "Miss"
      ],
      "line": 20,
      "id": "title-validation;title;;4"
    },
    {
      "cells": [
        "Mrs"
      ],
      "line": 21,
      "id": "title-validation;title;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Title",
  "description": "",
  "id": "title-validation;title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email@domain.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Title \"Mr\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should not see Error \"Please select your title\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 902516534,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1081992956,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1240468539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 272123969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 16
    }
  ],
  "location": "HomepageSteps.i_select_Title(String)"
});
formatter.result({
  "duration": 39968183,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1702381396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select your title",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 331359279,
  "status": "passed"
});
formatter.after({
  "duration": 57306,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Title",
  "description": "",
  "id": "title-validation;title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email@domain.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Title \"Ms\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should not see Error \"Please select your title\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 705840695,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1126284729,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1201102922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 241649721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ms",
      "offset": 16
    }
  ],
  "location": "HomepageSteps.i_select_Title(String)"
});
formatter.result({
  "duration": 37279945,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1841190848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select your title",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 305091443,
  "status": "passed"
});
formatter.after({
  "duration": 78688,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Title",
  "description": "",
  "id": "title-validation;title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email@domain.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Title \"Miss\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should not see Error \"Please select your title\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 789056743,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1037815369,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1303425300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 239104748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miss",
      "offset": 16
    }
  ],
  "location": "HomepageSteps.i_select_Title(String)"
});
formatter.result({
  "duration": 43449719,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1425906468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select your title",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 320237691,
  "status": "passed"
});
formatter.after({
  "duration": 63721,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Title",
  "description": "",
  "id": "title-validation;title;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Email address \"email@domain.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Title \"Mrs\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should not see Error \"Please select your title\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 863354053,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1118220871,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1156703381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email@domain.com",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.i_enter_Email_address(String)"
});
formatter.result({
  "duration": 313891295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 16
    }
  ],
  "location": "HomepageSteps.i_select_Title(String)"
});
formatter.result({
  "duration": 41662551,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 1668880207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select your title",
      "offset": 24
    }
  ],
  "location": "HomepageSteps.i_should_not_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 390018966,
  "status": "passed"
});
formatter.after({
  "duration": 69708,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "No Title",
  "description": "",
  "id": "title-validation;no-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I select Get a Zopa Loan",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I select Get my personalised rates",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Calculate my rates",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see Error \"Please select your title\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_on_File_Mailer_home_page()"
});
formatter.result({
  "duration": 846351785,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_a_Zopa_Loan()"
});
formatter.result({
  "duration": 1191076128,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Get_my_personalised_rates()"
});
formatter.result({
  "duration": 1286509846,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_select_Calculate_my_rates()"
});
formatter.result({
  "duration": 3557211435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select your title",
      "offset": 20
    }
  ],
  "location": "HomepageSteps.i_should_see_Error_summary_box(String)"
});
formatter.result({
  "duration": 114418165,
  "status": "passed"
});
formatter.after({
  "duration": 79544,
  "status": "passed"
});
});