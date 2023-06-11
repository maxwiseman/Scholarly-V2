export interface Module {
  /** the unique identifier for the module */
  id: number
  /** the state of the module: 'active', 'deleted' */
  workflow_state: 'active' | 'deleted'
  /** the position of this module in the course (1-based) */
  position: number
  /** the name of this module */
  name: string
  /** (Optional) the date this module will unlock */
  unlock_at?: Date
  /** Whether module items must be unlocked in order */
  require_sequential_progress: boolean
  /** IDs of Modules that must be completed before this one is unlocked */
  prerequisite_module_ids: number[]
  /** The number of items in the module */
  items_count: number
  /** The API URL to retrive this module's items */
  /** canvas.example.com/api/v1/modules/123/items", */
  items_url: URL
  /**
   * The contents of this module, as an array of Module Items. (Present only if
   * requested via include[]=items AND the module is not deemed too large by
   * Canvas.)
   */
  items: {
    /** the unique identifier for the module item */
    id: number
    /** the id of the Module this item appears in */
    module_id: number
    /** the position of this item in the module (1-based) */
    position: number
    /** the title of this item */
    title: string
    /** 0-based indent level; module items may be indented to show a hierarchy */
    indent: number
    /**
     * the type of object referred to one of 'File', 'Page', 'Discussion',
     * 'Assignment', 'Quiz', 'SubHeader', 'ExternalUrl', 'ExternalTool'
     */
    type:
      | 'File'
      | 'Page'
      | 'Discussion'
      | 'Assignment'
      | 'Quiz'
      | 'SubHeader'
      | 'ExternalUrl'
      | 'ExternalTool'
    /**
     * the id of the object referred to applies to 'File', 'Discussion',
     * 'Assignment', 'Quiz', 'ExternalTool' types
     */
    content_id?: number
    /** link to the item in Canvas */
    html_url: URL
    /** (Optional) link to the Canvas API object, if applicable */
    url?: URL
    /** (only for 'Page' type) unique locator for the linked wiki page */
    page_url?: string
    /**
     * (only for 'ExternalUrl' and 'ExternalTool' types) external url that the item
     * points to
     */
    external_url?: URL
    /** (only for 'ExternalTool' type) whether the external tool opens in a new tab */
    new_tab?: boolean
    /** Completion requirement for this module item */
    completion_requirement: {
      /**
       * one of 'must_view', 'must_submit', 'must_contribute', 'min_score',
       * 'must_mark_done'
       */
      type: string
      /** minimum score required to complete (only present when type == 'min_score') */
      min_score: number
      /**
       * whether the calling user has met this requirement (Optional; present only if
       * the caller is a student or if the optional parameter 'student_id' is
       * included)
       */
      completed?: boolean
    }
    /**
     * (Present only if requested through include[]=content_details) If applicable,
     * returns additional details specific to the associated object
     */
    content_details?: {
      points_possible: number
      due_at: Date
      unlock_at: Date
      lock_at: Date
      locked_for_user: boolean
      lock_explanation: string
      lock_info: {
        asset_string: string
        unlock_at: Date
        lock_at: Date
        context_module: {}
      }
    }
    /**
     * (Optional) Whether this module item is published. This field is present only
     * if the caller has permission to view unpublished items.
     */
    published?: true
  }[]
  /**
   * The state of this Module for the calling user one of 'locked', 'unlocked',
   * 'started', 'completed' (Optional; present only if the caller is a student or
   * if the optional parameter 'student_id' is included)
   */
  state: 'locked' | 'unlocked' | 'started' | 'completed'
  /**
   * the date the calling user completed the module (Optional; present only if the
   * caller is a student or if the optional parameter 'student_id' is included)
   */
  completed_at: Date
  /**
   * if the student's final grade for the course should be published to the SIS
   * upon completion of this module
   */
  publish_final_grade: boolean
  /**
   * (Optional) Whether this module is published. This field is present only if
   * the caller has permission to view unpublished modules.
   */
  published?: boolean
}
