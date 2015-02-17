/*
 *  Copyright (c) 2005-2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */
var resources = function (page,meta) {
    return {
        js: ['flot/jquery.flot.js', 'flot/excanvas.min.js', 'logic/flot.stat.js','date_picker/datepicker.js','logic/date.picker.js'],
        css: ['flot-graphs.css','date_picker/datepicker/base.css','date_picker/datepicker/custom-widget.css','date_picker/datepicker/clean.css','es_statistics.css']
    };
};