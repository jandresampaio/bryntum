var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var GanttComponent = (function () {
    function GanttComponent() {
        this.tasks = [
            {
                "Id": 1000,
                "StartDate": "2017-01-16",
                "EndDate": "2017-02-13",
                "Name": "Project A",
                "PercentDone": 43,
                "expanded": true,
                "children": [
                    {
                        "Id": 1,
                        "Name": "Planning",
                        "PercentDone": 60,
                        "StartDate": "2017-01-16",
                        "Duration": 10,
                        "expanded": true,
                        "Rollup": true,
                        "children": [
                            {
                                "Id": 11,
                                "leaf": true,
                                "Name": "Investigate",
                                "PercentDone": 70,
                                "StartDate": "2017-01-16",
                                "EndDate": "2017-01-28 12:00",
                            },
                            {
                                "Id": 12,
                                "leaf": true,
                                "Name": "Assign resources",
                                "PercentDone": 60,
                                "StartDate": "2017-01-16",
                                "Duration": 8
                            },
                            {
                                "Id": 13,
                                "leaf": true,
                                "Name": "Gather documents",
                                "PercentDone": 50,
                                "StartDate": "2017-01-16",
                                "Duration": 8
                            },
                            {
                                "Id": 17,
                                "leaf": true,
                                "Name": "Report to management",
                                "PercentDone": 0,
                                "StartDate": "2017-01-28",
                                "Duration": 0
                            }
                        ]
                    },
                    {
                        "Id": 4,
                        "Name": "Implementation Phase",
                        "PercentDone": 20,
                        "StartDate": "2017-01-30",
                        "Duration": 10,
                        "expanded": true,
                        "Rollup": true,
                        "children": [
                            {
                                "Id": 34,
                                "leaf": true,
                                "Name": "Preparation work",
                                "PercentDone": 40,
                                "StartDate": "2017-01-30",
                                "Duration": 5
                            },
                            {
                                "Id": 16,
                                "leaf": true,
                                "Name": "Choose technology suite",
                                "PercentDone": 30,
                                "StartDate": "2017-01-30",
                                "Duration": 4,
                                "Rollup": true
                            },
                            {
                                "Id": 15,
                                "Name": "Build prototype",
                                "PercentDone": 9,
                                "StartDate": "2017-02-06",
                                "Duration": 5,
                                "expanded": true,
                                "children": [
                                    {
                                        "Id": 20,
                                        "leaf": true,
                                        "Name": "Step 1",
                                        "PercentDone": 20,
                                        "StartDate": "2017-02-06",
                                        "Duration": 4
                                    },
                                    {
                                        "Id": 19,
                                        "leaf": true,
                                        "Name": "Step 2",
                                        "PercentDone": 10,
                                        "StartDate": "2017-02-06",
                                        "Duration": 4
                                    },
                                    {
                                        "Id": 18,
                                        "leaf": true,
                                        "Name": "Step 3",
                                        "PercentDone": 0,
                                        "StartDate": "2017-02-06",
                                        "Duration": 4
                                    },
                                    {
                                        "Id": 21,
                                        "leaf": true,
                                        "Name": "Follow up with customer",
                                        "PercentDone": 0,
                                        "StartDate": "2017-02-10",
                                        "Duration": 1,
                                        "Rollup": true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 5,
                        "leaf": true,
                        "Name": "Customer approval",
                        "PercentDone": 0,
                        "StartDate": "2017-02-13",
                        "Duration": 0,
                        "Rollup": true
                    }
                ]
            }
        ];
        this.dependencies = [
            {
                "Id": 1,
                "From": 11,
                "To": 17
            },
            {
                "Id": 2,
                "From": 12,
                "To": 17
            },
            {
                "Id": 3,
                "From": 13,
                "To": 17
            },
            {
                "Id": 4,
                "From": 17,
                "To": 34
            },
            {
                "Id": 10,
                "From": 21,
                "To": 5
            },
            {
                "Id": 12,
                "From": 17,
                "To": 16
            },
            {
                "Id": 13,
                "From": 16,
                "To": 20
            },
            {
                "Id": 14,
                "From": 16,
                "To": 19
            },
            {
                "Id": 15,
                "From": 16,
                "To": 18
            },
            {
                "Id": 16,
                "From": 18,
                "To": 21
            }
        ];
    }
    GanttComponent.prototype.ngOnInit = function () {
        //alert("OnInit Gantt");
    };
    GanttComponent.prototype.ngOnDestroy = function () {
        //alert("Destroy Gantt");
    };
    GanttComponent.prototype.ngAfterContentInit = function () {
        //alert("AfterContentInit Gantt");
        Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());
        var context = this;
        Sch.preset.Manager.registerPreset("skillsGanttPreset", {
            timeColumnWidth: 20,
            rowHeight: 24,
            resourceColumnWidth: 100,
            displayDateFormat: "Y-m-d",
            shiftUnit: "WEEK",
            shiftIncrement: 1,
            defaultSpan: 10,
            timeResolution: {
                unit: "DAY",
                increment: 1
            },
            headerConfig: {
                bottom: {
                    unit: "DAY",
                    align: "center",
                    renderer: function (start) {
                        var dayName = Ext.Date.dayNames[start.getDay()];
                        return dayName.substring(0, 1);
                    },
                    verticalColumnWidth: 25
                },
                middle: {
                    unit: "WEEK",
                    align: "center",
                    verticalColumnWidth: 115,
                    renderer: function (start, end, cfg) {
                        var dayName = (Ext.Date.dayNames[start.getDay()]).substring(0, 3);
                        var dayNumber = Ext.Date.format(start, "d");
                        var monthName = (Ext.Date.monthNames[start.getMonth()]).substring(0, 3);
                        var yearNumber = Ext.Date.format(start, "Y");
                        return dayName + " " + dayNumber + " " + monthName + " " + yearNumber;
                    }
                },
            }
        });
        /**
        * This example shows both the current plan and the original baseline.
        */
        var ganttPanel = Ext.create('Gnt.panel.Gantt', {
            xtype: 'basicgantt',
            requires: [
                'Sch.util.Date',
                'Sch.preset.Manager',
                'Gnt.column.Name',
                'Gnt.plugin.taskeditor.TaskEditor',
                'Gnt.plugin.TaskContextMenu',
                'Gnt.plugin.DependencyEditor',
                'Sch.plugin.TreeCellEditing'
            ],
            plugins: [
                // enables task editing by double clicking, displays a window with fields to edit
                'gantt_taskeditor',
                // enables double click dependency editing
                'gantt_dependencyeditor',
                // shows a context menu when right clicking a task
                'gantt_taskcontextmenu',
                // column editing
                'scheduler_treecellediting',
                "gantt_selectionreplicator"
            ],
            dependencyViewConfig: {
                overCls: 'dependency-over'
            },
            title: 'Basic demo',
            // height of each row
            rowHeight: 35,
            height: 800,
            renderTo: "ganttPanel",
            stateful: true,
            stateId: "gantt_panel_local_storage",
            // startDate and endDate determine the date interval visible in the gantt chart.
            // endDate is set in initComponent, because it is calculated from startDate.
            // when startDate and endDate are omitted, these dates will be determined by the loaded data
            // startDate                : new Date(2017, 0, 11),
            // give weekends a contrasting color
            highlightWeekends: true,
            // enable setting PercentDone for a task by dragging a percentage handle
            enableProgressBarResize: true,
            // allow creating/editing of dependencies by dragging with the mouse
            enableDependencyDragDrop: true,
            // it is important to match eventBorderWidth with border-width from css.
            // this example uses triton theme, which is borderless
            eventBorderWidth: 0,
            // change to true to allow user to resize static column area
            split: false,
            selModel: {
                type: 'gantt_spreadsheet'
            },
            // define your columns
            columns: [
                {
                    id: "gnt-sequence",
                    xtype: "sequencecolumn",
                    tdCls: "gantt-sequence-column",
                    readonly: true,
                    align: "left"
                },
                {
                    xtype: 'namecolumn',
                    flex: 1,
                    width: 250
                },
                {
                    xtype: "startdatecolumn",
                    format: "d/m/Y",
                    header: "StartDate",
                    readonly: true
                },
                {
                    xtype: "enddatecolumn",
                    header: "EndDate",
                    sortable: false,
                    format: "d/m/Y"
                },
                {
                    id: "gant-predecessor",
                    xtype: "predecessorcolumn",
                    width: 100,
                    header: "Predecessor",
                    useSequenceNumber: true,
                    readonly: true,
                    sortable: false
                }
            ],
            // demonstrates customization of the preset by specifing column width and removing the days-row
            viewPreset: "skillsGanttPreset",
            // a gantt chart requires a taskStore, which holds the tasks to display
            taskStore: {
                type: 'gantt_taskstore',
                proxy: {
                    type: "memory",
                    reader: {
                        type: "json",
                    },
                }
            },
            // a gantt chart also requires a dependency store, which defines the connections between the tasks
            dependencyStore: {
                type: 'gantt_dependencystore',
                allowedDependencyTypes: ['EndToStart'],
                autoLoad: true,
                proxy: {
                    type: "memory",
                    reader: {
                        type: "json"
                    },
                    data: this.dependencies
                }
            }
        });
        // HERE I've added the task store explicit loading
        ganttPanel.getTaskStore().proxy.data = this.tasks;
        ganttPanel.getTaskStore().load();
        this.ganttPanel = ganttPanel;
    };
    GanttComponent.prototype.showCriticalPath = function () {
        var view = this.ganttPanel.getSchedulingView();
        this.highlightCriticalPath = !this.highlightCriticalPath;
        if (this.highlightCriticalPath)
            view.highlightCriticalPaths();
        else
            view.unhighlightCriticalPaths();
    };
    GanttComponent.prototype.printTaskDate = function () {
    };
    return GanttComponent;
}());
GanttComponent = __decorate([
    core_1.Component({
        selector: 'gantt',
        template: "<input type=\"button\" value=\"Show critical path\" (click)=\"showCriticalPath()\"/>\n                <div style=\"margin-top: 20px\" id=\"ganttPanel\"></div>",
    }),
    __metadata("design:paramtypes", [])
], GanttComponent);
exports.GanttComponent = GanttComponent;
//# sourceMappingURL=gantt.component.js.map