export interface Course {
  /** the unique identifier for the course */
  id: number
  /**
   * the SIS identifier for the course, if defined. This field is only included if
   * the user has permission to view SIS information.
   */
  sis_course_id: any
  /** the UUID of the course */
  uuid: string
  /**
   * the integration identifier for the course, if defined. This field is only
   * included if the user has permission to view SIS information.
   */
  integration_id: any
  /**
   * the unique identifier for the SIS import. This field is only included if the
   * user has permission to manage SIS information.
   */
  sis_import_id: number
  /**
   * the full name of the course. If the requesting user has set a nickname for
   * the course, the nickname will be shown here.
   */
  name: string
  /** the course code */
  course_code: string
  /**
   * the actual course name. This field is returned only if the requesting user
   * has set a nickname for the course.
   */
  original_name: string
  image_download_url: string
  banner_image_download_url: string
  /**
   * the current state of the course one of 'unpublished', 'available',
   * 'completed', or 'deleted'
   */
  workflow_state: string
  /** the account associated with the course */
  account_id: number
  /** the root account associated with the course */
  root_account_id: number
  /** the enrollment term associated with the course */
  enrollment_term_id: number
  /** A list of grading periods associated with the course */
  grading_periods: any
  /** the grading standard associated with the course */
  grading_standard_id: number
  /** the grade_passback_setting set on the course */
  grade_passback_setting: string
  /** the date the course was created. */
  created_at: string
  /** the start date for the course, if applicable */
  start_at: string
  /** the end date for the course, if applicable */
  end_at: string
  /** the course-set locale, if applicable */
  locale: string
  /**
   * A list of enrollments linking the current user to the course. for student
   * enrollments, grading information may be included if include[]=total_scores
   */
  enrollments: any
  /** optional: the total number of active and invited students in the course */
  total_students: number
  /** course calendar */
  calendar: {
    /** The URL of the calendar in ICS format */
    ics: URL
  }
  /**
   * the type of page that users will see when they first visit the course -
   * 'feed': Recent Activity Dashboard - 'wiki': Wiki Front Page - 'modules':
   * Course Modules/Sections Page - 'assignments': Course Assignments List -
   * 'syllabus': Course Syllabus Page other types may be added in the future
   */
  default_view: string
  /** optional: user-generated HTML for the course syllabus */
  syllabus_body: string
  /**
   * optional: the number of submissions needing grading returned only if the
   * current user has grading rights and include[]=needs_grading_count
   */
  needs_grading_count: number
  /**
   * optional: the enrollment term object for the course returned only if
   * include[]=term
   */
  term: {
    id: number
    name: string
    start_at: Date
    end_at: Date
  }
  /**
   * optional: information on progress through the course returned only if
   * include[]=course_progress
   */
  course_progress: {
    /** total number of requirements from all modules */
    requirement_count: number
    /** total number of requirements the user has completed from all modules */
    requirement_completed_count: number
    /**
     * url to next module item that has an unmet requirement. null if the user has
     * completed the course or the current module does not require sequential
     * progress
     */
    next_requirement_url: URL
    /**
     * date the course was completed. null if the course has not been completed by
     * this user
     */
    completed_at: Date
  }
  course_color: string
  /** weight final grade based on assignment group percentages */
  apply_assignment_group_weights: boolean
  /** optional: an array of teachers of the course. returned only if include[]=teachers */
  teachers: {
    id: number
    anonymous_id: string
    display_name: string
    avatar_image_url: string
    html_url: URL
    pronouns: any
  }[]
  /**
   * optional: the permissions the user has for the course. returned only for a
   * single course and include[]=permissions
   */
  permissions: {
    create_discussion_topic: boolean
    create_announcement: boolean
  }
  is_public: boolean
  is_public_to_auth_users: boolean
  public_syllabus: boolean
  public_syllabus_to_auth: boolean
  /** optional: the public description of the course */
  public_description: string
  storage_quota_mb: number
  storage_quota_used_mb: number
  hide_final_grades: boolean
  license: string
  allow_student_assignment_edits: boolean
  allow_wiki_comments: boolean
  allow_student_forum_attachments: boolean
  open_enrollment: boolean
  self_enrollment: boolean
  restrict_enrollments_to_course_dates: boolean
  course_format: string
  /**
   * optional: this will be true if this user is currently prevented from viewing
   * the course because of date restriction settings
   */
  access_restricted_by_date: boolean
  /** The course's IANA time zone name. */
  time_zone: string
  /**
   * optional: whether the course is set as a Blueprint Course (blueprint fields
   * require the Blueprint Courses feature)
   */
  blueprint: boolean
  /** optional: Set of restrictions applied to all locked course objects */
  blueprint_restrictions: {
    content: boolean
    points: boolean
    due_dates: boolean
    availability_dates: boolean
  }
  /**
   * optional: Sets of restrictions differentiated by object type applied to
   * locked course objects
   */
  blueprint_restrictions_by_object_type: {
    assignment: { content: boolean; points: boolean }
    wiki_page: { content: boolean }
  }
  /**
   * optional: whether the course is set as a template (requires the Course
   * Templates feature)
   */
  template: boolean
}
