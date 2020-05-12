define({ "api": [
  {
    "type": "get",
    "url": "/api_hocmai/footer",
    "title": "",
    "name": "GetFooter",
    "group": "Footer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"status\": \"success\",\n       \"data\": [\n           {\n               \"footer_id\": 1,\n               \"footer_desc\": \"<p>Ch&agrave;o buổi s&aacute;ng,</p>\",\n               \"footer_image\": \"http://hocmaivideo.tk/uploads/admin/footer/1/image/Chào buổi sáng.png\",\n               \"footer_start_time\": \"05:00\",\n               \"footer_end_time\": \"11:59\"\n           },\n           {\n               \"footer_id\": 2,\n               \"footer_desc\": \"<p>Ch&agrave;o buổi chiều,</p>\",\n               \"footer_image\": \"http://hocmaivideo.tk/uploads/admin/footer/2/image/Chào buổi chiều.png\",\n               \"footer_start_time\": \"12:00\",\n               \"footer_end_time\": \"17:59\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Footer"
  },
  {
    "type": "get",
    "url": "/api_hocmai/header",
    "title": "",
    "name": "GetHeader",
    "group": "Header",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"status\": \"success\",\n       \"data\": [\n           {\n               \"header_id\": 1,\n               \"header_desc\": \"<p>Ch&agrave;o buổi s&aacute;ng,</p>\",\n               \"header_image\": \"http://hocmaivideo.tk/uploads/admin/header/1/image/Chào buổi sáng.png\",\n               \"header_start_time\": \"05:00\",\n               \"header_end_time\": \"11:59\"\n           },\n           {\n               \"header_id\": 2,\n               \"header_desc\": \"<p>Ch&agrave;o buổi chiều,</p>\",\n               \"header_image\": \"http://hocmaivideo.tk/uploads/admin/header/2/image/Chào buổi chiều.png\",\n               \"header_start_time\": \"12:00\",\n               \"header_end_time\": \"17:59\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Header"
  },
  {
    "type": "get",
    "url": "/api_hocmai/block/list",
    "title": "",
    "name": "GetBlockList",
    "group": "Kênh",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"school_block_id\": 1,\n            \"school_block_name\": \"THPT\",\n            \"school_block_avatar\": \"http://hocmaivideo.tk/uploads/block/1/avatar/THPT.png\",\n            \"school_block_list_class\": [\n                {\n                    \"class_id\": 1,\n                    \"class_name\": \"Lớp 12\"\n                },\n                {\n                    \"class_id\": 2,\n                    \"class_name\": \"Lớp 11\"\n                },\n                {\n                    \"class_id\": 3,\n                    \"class_name\": \"Lớp 10\"\n                }\n            ]\n        },\n        {\n            \"school_block_id\": 2,\n            \"school_block_name\": \"THCS\",\n            \"school_block_avatar\": \"http://hocmaivideo.tk/uploads/block/2/avatar/THCS.png\",\n            \"school_block_list_class\": [\n                {\n                    \"class_id\": 4,\n                    \"class_name\": \"Lớp 9\"\n                },\n                {\n                    \"class_id\": 5,\n                    \"class_name\": \"Lớp 8\"\n                },\n                {\n                    \"class_id\": 6,\n                    \"class_name\": \"Lớp 7\"\n                },\n                {\n                    \"class_id\": 7,\n                    \"class_name\": \"Lớp 6\"\n                }\n            ]\n        },\n        {\n            \"school_block_id\": 3,\n            \"school_block_name\": \"TH\",\n            \"school_block_avatar\": \"http://hocmaivideo.tk/uploads/block/3/avatar/Tiểu học.png\",\n            \"school_block_list_class\": [\n                {\n                    \"class_id\": 8,\n                    \"class_name\": \"Lớp 5\"\n                },\n                {\n                    \"class_id\": 9,\n                    \"class_name\": \"Lớp 4\"\n                },\n                {\n                    \"class_id\": 10,\n                    \"class_name\": \"Lớp 3\"\n                },\n                {\n                    \"class_id\": 11,\n                    \"class_name\": \"Lớp 2\"\n                },\n                {\n                    \"class_id\": 12,\n                    \"class_name\": \"Lớp 1\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Kênh"
  },
  {
    "type": "post",
    "url": "/api_hocmai/block/detail",
    "title": "Danh sách livestream xem lại theo kênh không lọc",
    "name": "PostBlockDetail",
    "group": "Livestream",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "schoolblock_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": "<p>id của lớp có thể không truyền</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"success\",\n    \"data\": {\n        \"list_class\": [\n            {\n                \"class_id\": 1,\n                \"class_name\": \"Lớp 12\"\n            },\n            {\n                \"class_id\": 2,\n                \"class_name\": \"Lớp 11\"\n            },\n            {\n                \"class_id\": 3,\n                \"class_name\": \"Lớp 10\"\n            }\n        ],\n        \"list_livestream\": {\n            \"Hôm nay (2020/04/24)\": {\n                \"36\": {\n                    \"livestream_id\": 36,\n                    \"name\": \"dssa\",\n                    \"video_url\": [\n                        {\n                            \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                            \"video_start_time\": \"2020-04-24 09:15:25\",\n                            \"video_end_time\": \"2020-04-24 09:28:25\"\n                        }\n                    ],\n                    \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/36/small/6c340324836779392076.jpg\",\n                    \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/36/big/a4ea0057ec2716794f36.jpg\",\n                    \"subject_id\": 1,\n                    \"subject_name\": \"Toán\",\n                    \"class_id\": 1,\n                    \"class_name\": \"Lớp 12\",\n                    \"description\": \"<p>dsa</p>\",\n                    \"start_time\": \"2020-04-24 09:15:25\",\n                    \"end_time\": \"2020-04-24 09:28:25\",\n                    \"expire_date\": \"2020-05-08 00:00:00\",\n                    \"repeat\": 1,\n                    \"livestream_status\": 3,\n                    \"livestream_status_name\": \"Phát xong\",\n                    \"teacher_name\": \"Lê Bá Khá\",\n                    \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/1/avatar/modern-man-smiling_1194-11653.jpg\",\n                    \"like_number\": null,\n                    \"view_number\": null\n                }\n            },\n            \"2020/04/23\": {\n                \"28\": {\n                    \"livestream_id\": 28,\n                    \"name\": \"Video của thầy Tuấn\",\n                    \"video_url\": [\n                        {\n                            \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                            \"video_start_time\": \"2020-04-23 21:03:30\",\n                            \"video_end_time\": \"2020-04-23 21:16:30\"\n                        }\n                    ],\n                    \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/small/87449570_2145660542255856_3117446160046882816_o.jpg\",\n                    \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/big/87765454_2145660568922520_6848875860905164800_o.jpg\",\n                    \"subject_id\": 1,\n                    \"subject_name\": \"Toán\",\n                    \"class_id\": 1,\n                    \"class_name\": \"Lớp 12\",\n                    \"description\": \"<p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><ul>\\t<li>Video của thầy Tuấn</li>\\t<li>Video của thầy TuấnVideo của thầy Tuấn</li>\\t<li>Video của thầy Tuấn</li></ul><p>&nbsp;</p>\",\n                    \"start_time\": \"2020-04-23 21:03:30\",\n                    \"end_time\": \"2020-04-23 21:16:30\",\n                    \"expire_date\": \"2020-05-08 00:00:00\",\n                    \"repeat\": 1,\n                    \"livestream_status\": 3,\n                    \"livestream_status_name\": \"Phát xong\",\n                    \"teacher_name\": \"Đặng Bá Đạo\",\n                    \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/3/avatar/rn1se5zkikkz.png\",\n                    \"like_number\": null,\n                    \"view_number\": null\n                }\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Livestream"
  },
  {
    "type": "post",
    "url": "/api_hocmai/block/detail",
    "title": "Danh sách livestream xem lại theo kênh có lọc theo ngày",
    "name": "PostBlockDetailWithDay",
    "group": "Livestream",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "schoolblock_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": "<p>id của lớp có thể không truyền</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "date_time",
            "description": "<p>Ngày xem lại các livestream nếu có theo format: Y/m/d</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_time_day",
            "description": "<p>Ngày xem lại các livestream theo group giờ(bắt buộc nếu có date_time)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"success\",\n    \"data\": {\n        \"list_class\": [\n            {\n                \"class_id\": 1,\n                \"class_name\": \"Lớp 12\"\n            },\n            {\n                \"class_id\": 2,\n                \"class_name\": \"Lớp 11\"\n            },\n            {\n                \"class_id\": 3,\n                \"class_name\": \"Lớp 10\"\n            }\n        ],\n        \"list_livestream\": {\n            \"Hôm nay (2020/04/24)\": {\n                \"28\": {\n                    \"livestream_id\": 28,\n                    \"name\": \"Video của thầy Tuấn\",\n                    \"video_url\": [\n                        {\n                            \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                            \"video_start_time\": \"2020-04-24 04:03:30\",\n                            \"video_end_time\": \"2020-04-24 04:03:43\"\n                        }\n                    ],\n                    \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/small/87449570_2145660542255856_3117446160046882816_o.jpg\",\n                    \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/big/87765454_2145660568922520_6848875860905164800_o.jpg\",\n                    \"subject_id\": 1,\n                    \"subject_name\": \"Toán\",\n                    \"class_id\": 1,\n                    \"class_name\": \"Lớp 12\",\n                    \"description\": \"<p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><ul>\\t<li>Video của thầy Tuấn</li>\\t<li>Video của thầy TuấnVideo của thầy Tuấn</li>\\t<li>Video của thầy Tuấn</li></ul><p>&nbsp;</p>\",\n                    \"start_time\": \"2020-04-24 04:03:30\",\n                    \"end_time\": \"2020-04-24 04:03:43\",\n                    \"expire_date\": \"2020-05-08 00:00:00\",\n                    \"repeat\": 1,\n                    \"livestream_status\": 3,\n                    \"livestream_status_name\": \"Phát xong\",\n                    \"teacher_name\": \"Đặng Bá Đạo\",\n                    \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/3/avatar/rn1se5zkikkz.png\",\n                    \"like_number\": null,\n                    \"view_number\": null\n                }\n            },\n            \"2020/04/23\": []\n        },\n        \"list_livestream_date\": {\n            \"2020/04/24\": {\n                \"04:03\": {\n                    \"28\": {\n                        \"livestream_id\": 28,\n                        \"name\": \"Video của thầy Tuấn\",\n                        \"video_url\": [\n                            {\n                                \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                                \"video_start_time\": \"2020-04-24 04:03:30\",\n                                \"video_end_time\": \"2020-04-24 04:03:43\"\n                            }\n                        ],\n                        \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/small/87449570_2145660542255856_3117446160046882816_o.jpg\",\n                        \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/big/87765454_2145660568922520_6848875860905164800_o.jpg\",\n                        \"subject_id\": 1,\n                        \"subject_name\": \"Toán\",\n                        \"class_id\": 1,\n                        \"class_name\": \"Lớp 12\",\n                        \"description\": \"<p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><ul>\\t<li>Video của thầy Tuấn</li>\\t<li>Video của thầy TuấnVideo của thầy Tuấn</li>\\t<li>Video của thầy Tuấn</li></ul><p>&nbsp;</p>\",\n                        \"start_time\": \"2020-04-24 04:03:30\",\n                        \"end_time\": \"2020-04-24 04:03:43\",\n                        \"expire_date\": \"2020-05-08 00:00:00\",\n                        \"repeat\": 1,\n                        \"livestream_status\": 3,\n                        \"livestream_status_name\": \"Phát xong\",\n                        \"teacher_name\": \"Đặng Bá Đạo\",\n                        \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/3/avatar/rn1se5zkikkz.png\",\n                        \"like_number\": null,\n                        \"view_number\": null\n                    }\n                },\n                \"04:06\": {\n                    \"29\": {\n                        \"livestream_id\": 29,\n                        \"name\": \"In-App Purchase HOCMAI.VN APP\",\n                        \"video_url\": [\n                            {\n                                \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                                \"video_start_time\": \"2020-04-24 04:06:52\",\n                                \"video_end_time\": \"2020-04-24 04:07:05\"\n                            }\n                        ],\n                        \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/29/small/84152308_2145660708922506_4659456100687413248_o.jpg\",\n                        \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/29/big/85175619_2145660492255861_5245331412713734144_o.jpg\",\n                        \"subject_id\": 1,\n                        \"subject_name\": \"Toán\",\n                        \"class_id\": 1,\n                        \"class_name\": \"Lớp 12\",\n                        \"description\": \"<p>In-App Purchase HOCMAI.VN APP</p><p>In-App Purchase HOCMAI.VN APP</p><p>In-App Purchase HOCMAI.VN APP</p><ol>\\t<li>In-App Purchase HOCMAI.VN APP</li>\\t<li>In-App Purchase HOCMAI.VN APPIn-App Purchase HOCMAI.VN APP</li>\\t<li>In-App Purchase HOCMAI.VN APP</li></ol>\",\n                        \"start_time\": \"2020-04-24 04:06:52\",\n                        \"end_time\": \"2020-04-24 04:07:05\",\n                        \"expire_date\": \"2020-05-08 00:00:00\",\n                        \"repeat\": 1,\n                        \"livestream_status\": 3,\n                        \"livestream_status_name\": \"Phát xong\",\n                        \"teacher_name\": \"Lê Bá Khá\",\n                        \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/1/avatar/modern-man-smiling_1194-11653.jpg\",\n                        \"like_number\": null,\n                        \"view_number\": null\n                    }\n                }\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Livestream"
  },
  {
    "type": "post",
    "url": "/api_hocmai/livestream/calendar",
    "title": "Danh sách api lịch phát toàn bộ tính từ ngày hiện tại về sau group theo ngày",
    "name": "PostLivestreamCalendarAll",
    "group": "Livestream",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "schoolblock_id",
            "description": "<p>id của kênh có thể không truyền</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": "<p>id của lớp có thể không truyền</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n    \"status\": \"success\",\n    \"data\": {\n        \"list_class\": [\n            {\n                \"class_id\": 1,\n                \"class_name\": \"Lớp 12\"\n            },\n            {\n                \"class_id\": 2,\n                \"class_name\": \"Lớp 11\"\n            },\n            {\n                \"class_id\": 3,\n                \"class_name\": \"Lớp 10\"\n            }\n        ],\n        \"list_livestream\": {\n            \"2020/04/27\": {\n                \"27\": {\n                    \"livestream_id\": 27,\n                    \"name\": \"In-App Purchase HOCMAI.VN APP livestream\",\n                    \"video_url\": [\n                        {\n                            \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                            \"video_start_time\": \"2020-04-27 21:02:00\",\n                            \"video_end_time\": \"2020-04-27 21:03:00\"\n                        }\n                    ],\n                    \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/27/small/Image 1.png\",\n                    \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/27/big/Image 2.png\",\n                    \"subject_id\": 1,\n                    \"subject_name\": \"Toán\",\n                    \"class_id\": 3,\n                    \"class_name\": \"Lớp 10\",\n                    \"description\": \"<p>In-App Purchase HOCMAI.VN APP livestream</p>\\r\\n\\r\\n<p>In-App Purchase HOCMAI.VN APP livestreamIn-App Purchase HOCMAI.VN APP livestreamIn-App Purchase HOCMAI.VN APP livestream</p>\\r\\n\\r\\n<p>In-App Purchase HOCMAI.VN APP livestream</p>\\r\\n\\r\\n<p>In-App Purchase HOCMAI.VN APP livestream</p>\",\n                    \"start_time\": \"2020-04-27 21:02:00\",\n                    \"end_time\": \"2020-04-27 21:03:00\",\n                    \"expire_date\": \"2020-05-08 00:00:00\",\n                    \"repeat\": 1,\n                    \"livestream_status\": 2,\n                    \"livestream_status_name\": \"Đang chờ\",\n                    \"teacher_name\": \"Lê Bá Khá\",\n                    \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/1/avatar/modern-man-smiling_1194-11653.jpg\",\n                    \"like_number\": null,\n                    \"view_number\": null\n                }\n            },\n            \"2020/04/24\": {\n                \"28\": {\n                    \"livestream_id\": 28,\n                    \"name\": \"Video của thầy Tuấn\",\n                    \"video_url\": [\n                        {\n                            \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                            \"video_start_time\": \"2020-04-24 04:03:30\",\n                            \"video_end_time\": \"2020-04-24 04:03:43\"\n                        }\n                    ],\n                    \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/small/87449570_2145660542255856_3117446160046882816_o.jpg\",\n                    \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/28/big/87765454_2145660568922520_6848875860905164800_o.jpg\",\n                    \"subject_id\": 1,\n                    \"subject_name\": \"Toán\",\n                    \"class_id\": 1,\n                    \"class_name\": \"Lớp 12\",\n                    \"description\": \"<p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><p>Video của thầy Tuấn</p><ul>\\t<li>Video của thầy Tuấn</li>\\t<li>Video của thầy TuấnVideo của thầy Tuấn</li>\\t<li>Video của thầy Tuấn</li></ul><p>&nbsp;</p>\",\n                    \"start_time\": \"2020-04-24 04:03:30\",\n                    \"end_time\": \"2020-04-24 04:03:43\",\n                    \"expire_date\": \"2020-05-08 00:00:00\",\n                    \"repeat\": 1,\n                    \"livestream_status\": 3,\n                    \"livestream_status_name\": \"Phát xong\",\n                    \"teacher_name\": \"Đặng Bá Đạo\",\n                    \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/3/avatar/rn1se5zkikkz.png\",\n                    \"like_number\": null,\n                    \"view_number\": null\n                }\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Livestream"
  },
  {
    "type": "post",
    "url": "/api_hocmai/livestream/calendar",
    "title": "Danh sách api lịch phát group livestream theo giờ khi chọn 1 ngày",
    "name": "PostLivestreamCalendarFilterDay",
    "group": "Livestream",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "schoolblock_id",
            "description": "<p>id của kênh có thể không truyền</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": "<p>id của lớp có thể không truyền</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "date_time_day",
            "description": "<p>ngày xem danh sách livestream theo giờ format: Y/m/d</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": " {\n    \"status\": \"success\",\n    \"data\": {\n        \"list_class\": [\n            {\n                \"class_id\": 1,\n                \"class_name\": \"Lớp 12\"\n            },\n            {\n                \"class_id\": 2,\n                \"class_name\": \"Lớp 11\"\n            },\n            {\n                \"class_id\": 3,\n                \"class_name\": \"Lớp 10\"\n            }\n        ],\n        \"list_livestream\": {\n            \"2020/04/20\": {\n                \"18:17\": {\n                    \"15\": {\n                        \"livestream_id\": 15,\n                        \"name\": \"test 1\",\n                        \"video_url\": [\n                            {\n                                \"video_url\": \"https://stream2.hocmai.vn/live/Lesson_2_Where_my_book.mp4/index.m3u8\",\n                                \"video_start_time\": \"2020-04-20 18:17:00\",\n                                \"video_end_time\": \"2020-04-20 18:30:13\"\n                            }\n                        ],\n                        \"small_cover\": \"http://hocmaivideo.tk/uploads/another_video/15/small/img.jpg\",\n                        \"big_cover\": \"http://hocmaivideo.tk/uploads/another_video/15/big/img.jpg\",\n                        \"subject_id\": 1,\n                        \"subject_name\": \"Toán\",\n                        \"class_id\": 1,\n                        \"class_name\": \"Lớp 12\",\n                        \"description\": \"Test lần 1\",\n                        \"start_time\": \"2020-04-20 18:17:00\",\n                        \"end_time\": \"2020-04-20 18:30:13\",\n                        \"expire_date\": \"2020-05-08 00:00:00\",\n                        \"repeat\": 1,\n                        \"livestream_status\": 3,\n                        \"livestream_status_name\": \"Phát xong\",\n                        \"teacher_name\": \"Lê Bá Khá\",\n                        \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/1/avatar/modern-man-smiling_1194-11653.jpg\",\n                        \"like_number\": null,\n                        \"view_number\": null\n                    }\n                }\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Livestream"
  },
  {
    "type": "post",
    "url": "/api_hocmai/livestream/calendar",
    "title": "Chi tiết 1 livestream",
    "name": "PostLivestreamDetail",
    "group": "Livestream",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "livestream_id",
            "description": "<p>id của livestream bắt buộc phải có</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n    \"status\": \"success\",\n    \"data\": {\n        \"time_start\": \"20:03\",\n        \"livestream_detail\": {\n            \"livestream_id\": 2,\n            \"name\": \"dfdff\",\n            \"video_url\": [],\n            \"small_cover\": {},\n            \"big_cover\": {},\n            \"subject_id\": null,\n            \"subject_name\": null,\n            \"class_id\": null,\n            \"class_name\": null,\n            \"description\": \"<p>dsad</p>\",\n            \"start_time\": \"2020-04-12 20:03:40\",\n            \"end_time\": \"2020-04-12 20:03:40\",\n            \"expire_date\": \"2020-05-08 00:00:00\",\n            \"repeat\": 2,\n            \"livestream_status\": 3,\n            \"livestream_status_name\": \"Phát xong\",\n            \"teacher_name\": \"Lê Bá Khá\",\n            \"teacher_image\": \"http://hocmaivideo.tk/uploads/teacher/1/avatar/modern-man-smiling_1194-11653.jpg\",\n            \"like_number\": null,\n            \"view_number\": null\n        },\n        \"teacher\": {\n            \"name\": \"Lê Bá Khá\",\n            \"desc\": \"<p>B&aacute; Kh&aacute;</p>\",\n            \"avatar\": \"http://hocmaivideo.tk/uploads/teacher/1/avatar/modern-man-smiling_1194-11653.jpg\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Livestream"
  },
  {
    "type": "post",
    "url": "/api_hocmai/livestream/play/current",
    "title": "Danh sách livestream đang phát",
    "name": "PostPlayCurrent",
    "group": "Livestream",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "schoolblock_id",
            "description": "<p>id của kênh có thể không truyền</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": "<p>id của lớp có thể không truyền</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"status\": \"success\",\n       \"data\": {\n           \"list_class\": [\n               {\n                   \"class_id\": 1,\n                   \"class_name\": \"Lớp 12\"\n               },\n               {\n                   \"class_id\": 2,\n                   \"class_name\": \"Lớp 11\"\n               },\n               {\n                   \"class_id\": 3,\n                   \"class_name\": \"Lớp 10\"\n               }\n           ],\n           \"list_livestream\": []\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Livestream"
  },
  {
    "type": "post",
    "url": "/api_hocmai/app/rate",
    "title": "",
    "name": "PostRateApp",
    "group": "Rate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>id của người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_name",
            "description": "<p>Tên của người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_comment",
            "description": "<p>Comment của người dùng về app</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>rating của người dùng cho app. Ví dụ : 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       {\n           \"status\": \"success\",\n           \"data\": {\n               \"id\": 1,\n               \"rate\": \"1\"\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Applications/MAMP/htdocs/hocmai_tool_video/hocmai_video/app/apidoc/ApiController.php",
    "groupTitle": "Rate"
  }
] });
