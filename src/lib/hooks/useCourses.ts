'use client'

import { TokenContext } from '@/src/app/providers'
import { useContext } from 'react'
import useSWR from 'swr'

export function useCourses() {
  const token = useContext(TokenContext)
  // @ts-ignore
  const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())
  // return useSWR(
  //   [
  //     'https://jsonplaceholder.typicode.com/posts/1',
  //     { headers: { Authorization: token } },
  //   ],
  //   fetcher
  // )

  return {
    isLoading: false,
    data: [
      {
        id: 370663,
        sis_course_id: null,
        uuid: 'WvAHhY5FINzq5IyRIJybGeiXyFkG3SqHUPb7jZY5',
        integration_id: null,
        sis_import_id: 34,
        name: 'InstructureCon 2012',
        course_code: 'INSTCON12',
        original_name: 'InstructureCon-2012-01',
        workflow_state: 'available',
        account_id: 81259,
        root_account_id: 81259,
        enrollment_term_id: 34,
        grading_periods: null,
        grading_standard_id: 25,
        grade_passback_setting: 'nightly_sync',
        created_at: '2012-05-01T00:00:00-06:00',
        start_at: '2012-06-01T00:00:00-06:00',
        end_at: '2012-09-01T00:00:00-06:00',
        locale: 'en',
        enrollments: null,
        total_students: 32,
        calendar: null,
        default_view: 'feed',
        syllabus_body: '<p>syllabus html goes here</p>',
        needs_grading_count: 17,
        term: null,
        course_progress: null,
        apply_assignment_group_weights: true,
        permissions: {
          create_discussion_topic: true,
          create_announcement: true,
        },
        is_public: true,
        is_public_to_auth_users: true,
        public_syllabus: true,
        public_syllabus_to_auth: true,
        public_description: 'Come one, come all to InstructureCon 2012!',
        storage_quota_mb: 5,
        storage_quota_used_mb: 5,
        hide_final_grades: false,
        license: 'Creative Commons',
        allow_student_assignment_edits: false,
        allow_wiki_comments: false,
        allow_student_forum_attachments: false,
        open_enrollment: true,
        self_enrollment: false,
        restrict_enrollments_to_course_dates: false,
        course_format: 'online',
        access_restricted_by_date: false,
        time_zone: 'America/Denver',
        blueprint: true,
        blueprint_restrictions: {
          content: true,
          points: true,
          due_dates: false,
          availability_dates: false,
        },
        blueprint_restrictions_by_object_type: {
          assignment: { content: true, points: true },
          wiki_page: { content: true },
        },
        template: true,
      },
      {
        id: 370664,

        sis_course_id: null,

        uuid: 'WvAHhY5FINzq5IyRIJybGeiXyFkG3SqHUPb7jZY5',

        integration_id: null,

        sis_import_id: 34,

        name: 'InstructureCon 2013',

        course_code: 'INSTCON12',

        original_name: 'InstructureCon-2012-01',

        workflow_state: 'available',

        account_id: 81259,

        root_account_id: 81259,

        enrollment_term_id: 34,

        grading_periods: null,

        grading_standard_id: 25,

        grade_passback_setting: 'nightly_sync',

        created_at: '2012-05-01T00:00:00-06:00',

        start_at: '2012-06-01T00:00:00-06:00',

        end_at: '2012-09-01T00:00:00-06:00',

        locale: 'en',

        enrollments: null,

        total_students: 32,

        calendar: null,

        default_view: 'feed',

        syllabus_body: '<p>syllabus html goes here</p>',

        needs_grading_count: 17,

        term: null,

        course_progress: null,

        apply_assignment_group_weights: true,

        permissions: {
          create_discussion_topic: true,
          create_announcement: true,
        },
        is_public: true,
        is_public_to_auth_users: true,
        public_syllabus: true,
        public_syllabus_to_auth: true,

        public_description: 'Come one, come all to InstructureCon 2012!',
        storage_quota_mb: 5,
        storage_quota_used_mb: 5,
        hide_final_grades: false,
        license: 'Creative Commons',
        allow_student_assignment_edits: false,
        allow_wiki_comments: false,
        allow_student_forum_attachments: false,
        open_enrollment: true,
        self_enrollment: false,
        restrict_enrollments_to_course_dates: false,
        course_format: 'online',

        access_restricted_by_date: false,

        time_zone: 'America/Denver',

        blueprint: true,

        blueprint_restrictions: {
          content: true,
          points: true,
          due_dates: false,
          availability_dates: false,
        },

        blueprint_restrictions_by_object_type: {
          assignment: { content: true, points: true },
          wiki_page: { content: true },
        },

        template: true,
      },
    ],
  }
}
